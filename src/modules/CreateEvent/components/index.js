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
  createPlantingEvent
} from '../../../api/createEvent';

const CreateEvent = (props) => {
  const [eventType, setEventType] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const onClickEvent = (type) => {
    setEventType(type);
  };

  const onClickCancel = () => {
    setEventType('');
  };

  const onSubmitForm = async (formData, type) => {
    const res = await createEvent({
      status: 'Open',
      event_type: type,
      date_open: moment().format()
    });
    if (res.status === 200) {
      const { data } = res;
      if (type === 'Cleaning') {
        const cleaningRes = await createCleaningEvent({
          event: data.id,
          noBags: parseInt(formData.noBags, 10),
          noPeople: parseInt(formData.noPeople, 10),
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
          ...formData
        });

        if (plantingRes.status === 200) {
          setHasSubmitted(true);
        } else {
          setErrors(plantingRes.data);
        }
      }
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
      <div className='content'>
        <div className='event-options'>{renderContent()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEvent;
