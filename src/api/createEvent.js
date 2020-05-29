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

export const updateEvent = async (event_id, data) => {
  return axios({
    method: 'PUT',
    url: `${path}/events/${event_id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => error);
}

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

export const createGoogleEvent = async (googleToken, calendarId, data) => {
  return axios({
    method: 'POST',
    url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
    headers: {
      Authorization: `Bearer ${googleToken}`,
      'Content-Type': 'application/json'
    },
    data
  })
    .then((response) => response)
    .catch((error) => error);
};
