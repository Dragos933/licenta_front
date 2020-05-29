import React, { useState, useEffect } from 'react';
import {
  createGoogle,
  getGoogleAccount,
  getGoogleCalendars,
  updateGoogleCalendars,
  getGoogleTokens,
  refreshGoogleToken,
} from '../../../../api/profile';
import ResponseToast from '../../../../components/responseToast';

const SyncAccount = () => {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [google, setGoogle] = useState({});
  const [googleCalendars, setGoogleCalendars] = useState([]);
  const [currentCalendar, setCurrentCalendar] = useState();
  const [gotCalendars, setGotCalendars] = useState(false);

  const resetToastState = () => {
    setErrors([]);
    setSuccess(false);
    setGotCalendars(false);
  };

  useEffect(() => {
    async function googleLogged() {
      resetToastState();
      try {
        const googleCode = window.location.href.split('code=')[1].split('&')[0];
        const res = await getGoogleTokens(googleCode);
        await createGoogle({
          google_token: res.data.access_token,
          refresh_token: res.data.refresh_token,
          user: user.id,
        })
        const res2 = await getGoogleAccount(user.id);
        if (res2.data.length > 0) {
          setGoogle(res2.data[0]);
          setCurrentCalendar(res2.data[0].current_calendar || '');
        }
        setSuccess(true);
      } catch (error) {
        setErrors([error.msg]);
      }
    }
    if (window.location.href.includes('code=')) {
      googleLogged();
    }
  }, []);

  useEffect(() => {
    const getGoogleData = async () => {
      try {
        const res = await getGoogleAccount(user.id);
        if (res.data.length > 0) {
          setGoogle(res.data[0]);
          setCurrentCalendar(res.data[0].current_calendar || '');
        }
      } catch (error) {
        setErrors([error.msg]);
      }
    }
    getGoogleData();
  }, [])

  const onChangeCalendar = async (e) => {
    if (e.target.value !== 'Choose calendar') {
      try {
        const Ids = googleCalendars.filter(
          (item) => item.name === e.target.value
        );
        const res = await updateGoogleCalendars(google.id, {
          current_calendar: e.target.value,
          calendar_id: Ids[0].id
        });
        setCurrentCalendar(res.data.current_calendar);
        
      } catch (error) {
        setErrors(error);
      }
    }
  };

  const getGoogleCalendarsData = async () => {
    try {
      resetToastState();
      const refreshRes = await refreshGoogleToken(google.refresh_token);
      const res = await getGoogleCalendars(refreshRes.data.access_token);
      const calendarNames = res.data.items.map(item => {
        return ({
          name: item.summary,
          id: item.id
        })
      });
      setGoogleCalendars(calendarNames);
      setGotCalendars(true);
    } catch (error) {
      setErrors(['Error getting the calendars']);
    }
  }

  return (
    <div className='wheater-container'>
      {errors.length > 0 || success || gotCalendars ? (
        <ResponseToast
          type={success || gotCalendars ? 'success' : 'error'}
          message={success ? 'Successfully connected to google!' : gotCalendars ? 'Successfully retrieved the calendars!' : errors[0]}
          className='sync-google-toast'
        />
      ) : null}
      <div className='panel-info'>
        <p>Sync Account</p>
        <i className='fas fa-sync' />
      </div>
      <div className='content'>
        <p className='title'>Sync your account with Google!</p>
        <p className='descr'>
          In this way, your google calendar will be synced with ours.
        </p>
        <div className='google-btn'>
          <i className='fab fa-google' />
          <a href={'https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/calendar&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/profile&client_id=232221935946-0bo434m3mmb2gra3upag7v9a4o5lpsvj.apps.googleusercontent.com'}
          >
            <p>Connect with google</p>
          </a>
        </div>
        <p className='select-title'>Select your google calendar:</p>
        <select onChange={onChangeCalendar}>
          <option>Choose calendar</option>
          {googleCalendars.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </select>
        <i onClick={getGoogleCalendarsData} className="fas fa-sync loader"></i>
        <p className='create-title'>Currently selected google calendar:</p>
        <p className='selected-calendar'>{currentCalendar}</p>
      </div>
    </div>
  );
};

export default SyncAccount;
