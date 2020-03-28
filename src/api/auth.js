const axios = require('axios').default;

const path = 'http://localhost:1337';

const getEvents = () => {
  axios.get('http://localhost:1337/events').then((res) => console.log(res));
};

const register = async (data) => {
  return await axios
    .post(`${path  }/auth/local/register`, data)
    .then((response) => {
      // Success registration
      return response;
    })
    .catch((error) => {
      // Error registration
      throw new Error(returnError(error));
    });
};

const login = async (data) => {
  return await axios
    .post(`${path  }/auth/local`, {
      identifier: data.email,
      password: data.password
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};

const createTree = async (data) => {
  console.log(data);
  return await axios
    .post(`${path  }/trees`, data)
    .then((response) => response)
    .catch((error) => {
      throw new Error(returnError(error));
    });
};

const returnError = (error) => {
  return error.response.data.message[0].messages[0].message;
};

export default {
  getEvents,
  register,
  login,
  createTree
};
