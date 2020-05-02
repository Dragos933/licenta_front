import React from 'react';

const RecyclingEvent = (props) => {
  const { onClick } = props;

  return (
    <div className='option' onClick={() => onClick('recycling')}>
      <img src='/images/Recycling05.jpg' alt='Recycling img' />
      <div className='filter' />
      <p>Cleaning Event</p>
    </div>
  );
}

export default RecyclingEvent;