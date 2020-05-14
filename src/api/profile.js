import CustomErrors from '../utils/errors'
const axios = require('axios').default;

const path = 'http://localhost:1337/connections';

const WHEATER_TOKEN = 'ab24dd3525e8157e54a6f47c82e1f668';
const CITY_ID = '681290';
;

export const verifyNumber = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/send-code`,
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
    url: `${path}/verify-code`,
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
    .catch((error) => error);
};

export const getUserData = async () => {
  return axios({
    method: 'GET',
    url: `http://localhost:1337/users/me`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response)
    .catch((error) => error);
}

export const getUserTree = async (tree_id) => {
  return axios({
    method: 'GET',
    url: `http://localhost:1337/trees/${tree_id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response)
    .catch((error) => error);
}

export const updateUser = async (user_id, data) => {
  return axios({
    method: 'PUT',
    url: `http://localhost:1337/users/${user_id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    data,
  })
    .then((response) => response)
    .catch((error) => error);
}

export const getUserConnections = (user_id) => {
  return axios({
    method: 'GET',
    url: `http://localhost:1337/connections?user.id=${user_id}&status=Accepted`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response)
    .catch((error) => error);
}

export const createConnection = async (data) => {
  return axios({
    method: 'POST',
    url: `http://localhost:1337/connections`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    data
  })
    .then((response) => response)
    .catch((error) => {
      throw new CustomErrors(error.response.data.message);
    });
}

export const getSpecificUser = async (username) => {
  return axios({
    method: 'GET',
    url: `http://localhost:1337/users?username=${username}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response)
    .catch((error) => {
      throw new CustomErrors(error.response.data.message);
    });
}