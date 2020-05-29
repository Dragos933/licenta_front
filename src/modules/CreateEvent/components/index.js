import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Footer from '../../../components/footer/index';
import PlantingEvent from './PlantingEvent/index';
import RecyclingEvent from './RecyclingEvent';
import PlantingForm from './PlantingForm';
import RecyclingForm from './RecyclingForm';
import {
  createEvent,
  createCleaningEvent,
  createPlantingEvent,
  createGoogleEvent,
} from '../../../api/createEvent';
import { applyToEvent } from '../../../api/eventPage';
import ResponseToast from '../../../components/responseToast';
import { getGoogleAccount, refreshGoogleToken } from '../../../api/profile';

const CreateEvent = (props) => {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [eventType, setEventType] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [google, setGoogle] = useState({});

  const onClickEvent = (type) => {
    setEventType(type);
  };

  const onClickCancel = () => {
    setEventType('');
  };

  useEffect(() => {
    const getGoogle = async () => {
      try {
        const res = await getGoogleAccount(user.id);
        setGoogle(res.data[0]);
      } catch (error) {
        setErrors(error);
      }
    };
    getGoogle();
  }, [user.id]);

  const onSubmitForm = async (formData, type) => {
    setHasSubmitted(false);
    const res = await createEvent({
      status: 'Open',
      event_type: type,
      date_open: moment(formData.eventDate).format('YYYY-MM-DD')
    });
    if (res.status === 200) {
      const { data } = res;
      if (type === 'Cleaning') {
        const cleaningRes = await createCleaningEvent({
          event: data.id,
          noBags: parseInt(formData.noBags, 10),
          noPeople: parseInt(formData.noPeople, 10),
          eventDate: moment(formData.eventDate).format('YYYY-MM-DD'),
          requirements: formData.requirements || '',
          ...formData
        });
        if (cleaningRes.status === 200) {
          setHasSubmitted(true);
        } else {
          setErrors(cleaningRes.data);
        }
      } else {
        const plantingRes = await createPlantingEvent({
          event: data.id,
          noTrees: parseInt(formData.noTrees, 10),
          noPeople: parseInt(formData.noPeople, 10),
          eventDate: moment(formData.eventDate).format('YYYY-MM-DD'),
          requirements: formData.requirements || '',
          ...formData
        });
        if (plantingRes.status === 200) {
          setHasSubmitted(true);
        } else {
          setErrors(plantingRes.data);
        }
      }
      const resfreshRes = await refreshGoogleToken(google.refresh_token);
      await createGoogleEvent(
        resfreshRes.data.access_token,
        google.calendar_id,
        {
          start: {
            date: moment(formData.eventDate).format('YYYY-MM-DD')
          },
          end: {
            date: moment(formData.eventDate).format('YYYY-MM-DD')
          },
          summary: `${type} event`
        }
      );
      await applyToEvent({
        user: user.id,
        event: res.data.id,
        date: moment().format('YYYY-MM-DD'),
        username: user.username,
        status: 'Accepted',
      })
    } else {
      setErrors(res.data);
    }
    setEventType('');
  };

  const renderContent = () => {
    switch (eventType) {
      case 'recycling':
        return (
          <>
            <RecyclingForm
              onClickCancel={onClickCancel}
              onSubmit={onSubmitForm}
            />
            <i className='fas fa-arrow-left event-arrow' />
            <RecyclingEvent onClick={onClickEvent} />
          </>
        );
      case 'planting':
        return (
          <>
            <PlantingEvent onClick={onClickEvent} />
            <i className='fas fa-arrow-right event-arrow' />
            <PlantingForm
              onClickCancel={onClickCancel}
              onSubmit={onSubmitForm}
            />
          </>
        );
      default:
        return (
          <>
            <PlantingEvent onClick={onClickEvent} />
            <RecyclingEvent onClick={onClickEvent} />
            <div className='event-buttons'>
              <Link to='/home'>Home</Link>
              <Link to='/profile' className='profile'>
                Profile
              </Link>
            </div>
          </>
        );
    }
  };

  return (
    <div className='create-event-container'>
      {errors.length > 0 || hasSubmitted ? (
        <ResponseToast
          type={hasSubmitted ? 'success' : 'error'}
          message={!hasSubmitted ? errors[0] : 'Event created successfully.'}
          className='create-event-toast'
        />
      ) : null}
      <div className='content'>
        <div className='event-options'>{renderContent()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEvent;
