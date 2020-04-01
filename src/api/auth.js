const axios = require('axios').default;

const path = 'http://localhost:1337';

const getEvents = () => {
  axios.get('http://localhost:1337/events').then((res) => console.log(res));
};

const register = async (data) => {
  return await axios
    .post(`${path}/auth/local/register`, data)
    .then((response) => {
      // Success registration
      return response;
    })
    .catch((error) => {
      // Error registration
      throw new Error(returnError(error));
    });
};

const updateFirstRegister = async (data) => {
  return axios
    .put(`${path}/users/${data}`, {
      confirmed: false
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error('Error Updating User!');
    });
};

const login = async (data) => {
  return await axios
    .post(`${path}/auth/local`, {
      identifier: data.email,
      password: data.password
    })
    .then((response) => response)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};

const createTree = async (data) => {
  return await axios
    .post(`${path}/trees`, data)
    .then((response) => response)
    .catch((error) => {
      throw new Error(returnError(error));
    });
};

const sendEmail = async (data) => {
  return await axios
    .post(`${path}/auth/send-email-confirmation`, data)
    .then((response) => response)
    .catch((error) => {
      throw new Error('Error sending confirmation email!');
    });
};

const forgotPassword = async (data) => {
  return await axios
    .post(`${path}/auth/forgot-password`, { email: data })
    .then((response) => response)
    .catch((error) => {
      throw new Error('Error sending forgot password email!');
    });
};

const returnError = (error) => {
  return error.response.data.message[0].messages[0].message;
};

export default {
  getEvents,
  register,
  login,
  createTree,
  sendEmail,
  updateFirstRegister,
  forgotPassword
};
