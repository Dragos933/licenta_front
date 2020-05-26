import React, { useState, useEffect } from 'react';
import {
  createGoogle,
  getGoogleAccount,
  getGoogleCalendars,
  updateGoogleCalendars
} from '../../../../api/profile';
import ResponseToast from '../../../../components/responseToast';

const formatCalendars = (calendars) => {
  return calendars.map((item) => ({
    name: item.summary,
    id: item.id
  }));
};

const SyncAccount = () => {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [google, setGoogle] = useState({});
  const [googleCalendars, setGoogleCalendars] = useState([]);
  const [currentCalendar, setCurrentCalendar] = useState();

  const resetToastState = () => {
    setErrors([]);
    setSuccess(false);
  };

  useEffect(() => {
    async function googleLogged() {
      resetToastState();
      try {
        const googleData = await getGoogleAccount(user.id);
        if (googleData.data.length !== 0) {
          setGoogle(googleData.data[0]);
          if (googleData.data[0].current_calendar) {
            setCurrentCalendar(googleData.data[0].current_calendar);
          }
        }
        const googleToken = window.location.href.includes('access_token=')
          ? window.location.href.split('access_token=')[1].split('&')[0]
          : '';
        if (googleData.data.length === 0) {
          const res = await createGoogle({
            google_token: googleToken,
            user: user.id
          });
          if (res.status === 200) {
            setSuccess(true);
            setGoogle(res.data);
          }
        } else if (googleToken) {
            await updateGoogleCalendars(googleData.data[0].id, {
              token: googleToken
            });
          }
      } catch (error) {
        setErrors([error.msg]);
      }
    }
    googleLogged();
  }, [user.id]);

  useEffect(() => {
    const getCalendars = async () => {
      try {
        const res = await getGoogleCalendars(google.google_token);
        const calendarNames = formatCalendars(res.data.items);

        setGoogleCalendars(calendarNames);
      } catch (error) {
        setErrors(error);
      }
    };
    if (google.google_token) {
      getCalendars();
    }
  }, [google]);

  const onChangeCalendar = async (e) => {
    if (e.target.value !== 'Choose calendar') {
      try {
        const Ids = googleCalendars.filter(
          (item) => item.name === e.target.value
        );
        await updateGoogleCalendars(google.id, {
          current_calendar: e.target.value,
          calendar_id: Ids[0].id
        });
      } catch (error) {
        setErrors(error);
      }
    }
  };

  return (
    <div className='wheater-container'>
      {errors.length > 0 || success ? (
        <ResponseToast
          type={success ? 'success' : 'error'}
          message={!success ? errors[0] : 'Successfully connected to google'}
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
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth?client_id=232221935946-0bo434m3mmb2gra3upag7v9a4o5lpsvj.apps.googleusercontent.com&redirect_uri=http://localhost:3000/profile&response_type=token&scope=https://www.googleapis.com/auth/calendar&include_granted_scopes=true&state=pass-through value">
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
        <p className='create-title'>Currently selected google calendar:</p>
        <p className='selected-calendar'>{currentCalendar}</p>
      </div>
    </div>
  );
};

export default SyncAccount;
