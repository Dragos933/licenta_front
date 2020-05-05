import React, { useState } from 'react';

const WeatherItem = (props) => {
  const { day_icon, temp = 9.45, wind = 35, date = '04/05' } = props;

  const getIcon = (day) => {
    switch (day) {
      case 'sunny':
        return '/images/Sun.svg';
      case 'rainy':
        return '/images/Weather-cloud-rain.svg';
      case 'cloudy':
        return '/images/Cloud.svg';
      default:
        return null;
    }
  };

  return (
    <div className='weather-item'>
      <img className='day' src={getIcon(day_icon)} />
      <div className='weather-data space'>
        <img className='label' src='/images/Calendar.svg' />
        <p className='info'>
          {date}
          {' '}
        </p>
      </div>
      <div className='weather-data space'>
        <img className='label' src='/images/Temperature.svg' />
        <p className='info'>
          {temp}
          {' '}
&#176;C
        </p>
      </div>
      <div className='weather-data '>
        <img className='label' src='/images/Weather-wind.svg' />
        <p className='info'>
          {wind}
          {' '}
km/h
        </p>
      </div>
    </div>
  );
};

export default WeatherItem;
