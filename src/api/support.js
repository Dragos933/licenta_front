import axios from 'axios';

const pathQA = 'https://apio-api.herokuapp.com/apio-qa-s';
const pathEmail = 'https://apio-api.herokuapp.com/apio-emails';

export const getQAs = () => {
  return axios({
    method: 'GET',
    url: pathQA,
  })
    .then((response) => response)
    .catch(error => error);
}

export const sendEmail = (data) => {
  return axios({
    method: 'POST',
    url: pathEmail,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  })
}

export default {
  getQAs,
  sendEmail,
}