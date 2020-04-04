const axios = require('axios').default;

const path = 'http://localhost:1337/profiles';

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
