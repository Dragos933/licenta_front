import React, { useState, useEffect, useReducer } from 'react';
import moment from 'moment';
import WeatherItem from '../../../../components/wheaterItem/index';
import {
  getWeatherDataAPI,
  getWeatherDataDB,
  createWeatherData,
  getUserData,
} from '../../../../api/home';
import { formatWeatherData } from '../../../../utils/wheater';

const LeftPanel = (props) => {
  const [weatherData, setWeatherData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getDataDB = async () => {
      try {
        const res = await getWeatherDataDB();
        setWeatherData(res.data);
      } catch (error) {
        setErrors([...errors, error]);
      }
    };
    getDataDB();
  }, []);

  useEffect(() => {
    const getMyData = async () => {
      try {
        const { id: userId } = JSON.parse(localStorage.getItem('user'));
        const res = await getUserData(userId);
        setUser(res.data);
      } catch (error) {
        setErrors([...errors, error])
      }
    };
    getMyData();
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
      setErrors([...errors, error]);
    }
  };

  return (
    <div className='left-panel panel'>
      <div className='home-info'>
        <div className='user-photo'>
          <img src='/images/ForgotPassword.jpg' alt='User' />
          <div className='user-info'>
            <p className='info-label'>Name</p>
            <p className='info'>{`${user.first_name} ${user.last_name}`}</p>
            <p className='info-label'>Level</p>
            <p className='info'>{`${user.tree ? user.tree.level : ''}`}</p>
            <p className='info-label'>E-mail</p>
            <p className='info'>{user.email}</p>
          </div>
        </div>
        <p className='user-description-label'>This is me:</p>
        <p className='user-description'>
          {user.description || 'No descriptiona available :('}
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
