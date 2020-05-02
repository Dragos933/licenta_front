import React from 'react';

const PlantingEvent = (props) => {
  const { onClick } = props;
  return (
    <div className='option' onClick={() => onClick('planting')}>
      <img src='/images/Register.jpg' alt='Planting' />
      <div className='filter' />
      <p className='planting'>Planting Event</p>
    </div>
  );
};

export default PlantingEvent;
