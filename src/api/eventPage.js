const axios = require('axios').default;

const path = 'http://localhost:1337';

export const getEvent = async (event_id) => {
  return axios({
    method: 'GET',
    url: `${path}/events/${event_id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((response) => response)
  .catch((error) => error);
}

export const closeEvent = async (event_id, data) => {
  return axios({
    method: 'PUT',
    url: `${path}/events/${event_id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data
  })
  .then((response) => response)
  .catch((error) => error);
}

export const contributeToEvent = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/contributions/contribute`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data
  })
  .then((response) => response)
  .catch((error) => error);
}

export const applyToEvent = async (data) => {
  return axios({
    method: 'POST',
    url: `${path}/applications`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data
  })
  .then((response) => response)
  .catch((error) => error);
}

export const acceptInvitation = async (inviteId, data) => {
  return axios({
    method: 'PUT',
    url: `${path}/invitations/${inviteId}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data
  })
  .then((response) => response)
  .catch((error) => error);
}