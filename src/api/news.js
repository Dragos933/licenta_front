import axios from 'axios';

const path = 'https://apio-api.herokuapp.com/apio-news';

export const getNews = (start = 0, limit = 5) => {
  return axios({
    method: 'GET',
    url: `${path}?_start=${start}&_limit=${limit}`,
  })
    .then((response) => response)
    .catch(error => error);
}

export const getNewsCount = () => {
  return axios({
    method: 'GET',
    url: `${path}/count`,
  })
    .then((response) => response)
    .catch(error => error);
}

export default {
  getNews,
}