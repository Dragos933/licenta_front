import React, { useState, useEffect } from 'react';
import moment from 'moment';
import WeatherItem from '../../../../components/wheaterItem/index';
import {
  getWeatherDataAPI,
  getWeatherDataDB,
  createWeatherData
} from '../../../../api/home';
import { formatWeatherData } from '../../../../utils/wheater';

const LeftPanel = (props) => {
  const {
    name = 'No Namer',
    level = 1,
    email = 'dragoscornean@yahoo.com',
    description = "Hi! My name is Dragos. Hope we will participate in as many events as we can. Let's connect and clean Romania!"
  } = props;

  const [weatherData, setWeatherData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const getDataDB = async () => {
      try {
        const res = await getWeatherDataDB();
        setWeatherData(res.data);
      } catch (error) {
        setErrors(error);
      }
    };
    getDataDB();
  }, []);

  const getWeatherDate = (days) => {
    return moment()
      .add('days', days)
      .format('DD/MM');
  };

  const getWData = async () => {
    try {
      const res = await getWeatherDataAPI();
      const formatedData = formatWeatherData(res.data.forecast.forecastday);
      await createWeatherData(formatedData);
    } catch (error) {
      setErrors(error);
    }
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
          <button onClick={getWData} className='weather-btn'>
            Weather
          </button>
          <div className='weather-container'>
            {weatherData.length === 3 ? (
              <>
                <WeatherItem
                  day_icon={weatherData[2].day_type}
                  temp={weatherData[2].temp}
                  date={getWeatherDate(0)}
                  wind={weatherData[2].wind_speed}
                />
                <WeatherItem
                  day_icon={weatherData[1].day_type}
                  temp={weatherData[1].temp}
                  date={getWeatherDate(1)}
                  wind={weatherData[1].wind_speed}
                />
                <WeatherItem
                  day_icon={weatherData[0].day_type}
                  temp={weatherData[0].temp}
                  date={getWeatherDate(2)}
                  wind={weatherData[0].wind_speed}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
