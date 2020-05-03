const axios = require('axios').default;

const path = 'http://localhost:1337';

export const createEvent = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/events`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => error);
};

export const createPlantingEvent = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/planting-events`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => error);
};

export const createCleaningEvent = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/recycling-events`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => error);
};
