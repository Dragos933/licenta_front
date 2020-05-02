import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import PlantingEvent from './PlantingEvent/index';
import RecyclingEvent from './RecyclingEvent';
import PlantingForm from './PlantingForm';
import RecyclingForm from './RecyclingForm';

const CreateEvent = (props) => {
  const [eventType, setEventType] = useState('');

  const onClickEvent = (type) => {
    setEventType(type);
  };

  const onClickCancel = () => {
    setEventType('');
  };

  const onSubmitForm = (formData) => {
    console.log(formData);
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
