import React, { useState } from 'react';
import moment from 'moment';
import WeatherItem from '../../../../components/wheaterItem/index';

const LeftPanel = (props) => {
  const {
    name = 'No Namer',
    level = 1,
    email = 'dragoscornean@yahoo.com',
    description = "Hi! My name is Dragos. Hope we will participate in as many events as we can. Let's connect and clean Romania!"
  } = props;

  const getWeatherDate = (days) => {
    return moment()
      .add('days', days)
      .format('DD/MM');
  };

  return (
    <div className='left-panel panel'>
      <div className='home-info'>
        <div className='user-photo'>
          <img src='/images/ForgotPassword.jpg' alt='User' />
          <div className='user-info'>
            <p className='info-label'>Name</p>
            <p className='info'>{name}</p>
            <p className='info-label'>Level</p>
            <p className='info'>{level}</p>
            <p className='info-label'>E-mail</p>
            <p className='info'>{email}</p>
          </div>
        </div>
        <p className='user-description-label'>This is me:</p>
        <p className='user-description'>
          {description || 'No descriptiona available :('}
        </p>
        <div className='left-panel-content'>
          <p className='weather-btn'>Weather</p>
          <div className='weather-container'>
            <WeatherItem day_icon='light' date={getWeatherDate(0)} />
            <WeatherItem day_icon='cloud' date={getWeatherDate(1)} />
            <WeatherItem day_icon='rain' date={getWeatherDate(2)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
