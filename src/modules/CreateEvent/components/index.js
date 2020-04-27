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
            <h1>Cleaning Event</h1>
          </div>
          <div className='option'>
            <h1>Planting Event</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEvent;
