import React from 'react';
import Footer from '../../../components/footer/index';

const CreateEvent = (props) => {
  return (
    <div className='create-event-container'>
      <div className='extra' />
      <div className='content'>
        <h1 className='event-title'>Choose event type:</h1>
        <div className='event-options'>
          <div className='option'>
            <img src='/images/Planting01.jpg' alt='Planting' />
            <div className='filter' />
            <p className='planting'>Planting Event</p>
          </div>
          <div className='option'>
            <img src='/images/Recycling03.jpg' alt='Recycling img' />
            <div className='filter' />
            <p>Cleaning Event</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEvent;
