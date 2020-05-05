import axios from 'axios';

const weather =
  'http://api.weatherapi.com/v1/forecast.json?key=7148a1b3ac2d4f6aab9180004200405&q=46.7712,23.6236&days=5';

export const getWeatherDataAPI = () => {
  return axios({
    method: 'GET',
    url: weather
  })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const getWeatherDataDB = () => {
  return axios({
    method: 'GET',
    url: `http://localhost:1337/weather-datas?_sort=id:DESC&_limit=3`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

export const createWeatherData = (data) => {
  return axios({
    method: 'POST',
    url: 'http://localhost:1337/weather-datas',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};
