const axios = require('axios').default;

const path = 'http://localhost:1337/profiles';

const WHEATER_TOKEN = 'ab24dd3525e8157e54a6f47c82e1f668';
const CITY_ID = '681290';

export const verifyNumber = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/verify-number`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => {
      throw new Error('- Error sending the code!');
    });
};

export const verifyCode = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/validate-number`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => {
      throw new Error('- Error verifying code!');
    });
};

export const getWheaterData = async () => {
  return axios({
    method: 'GET',
    url: `http://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${WHEATER_TOKEN}`
  })
    .then((response) => response)
    .catch((error) => {
      throw new Error('- Wheater data could not be retrieved!');
    });
};
