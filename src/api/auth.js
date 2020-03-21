const axios = require('axios').default;

const getHome = () => {
  axios
    .get('api/')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const forgotPassword = (e) => {
  console.log(e);
};

export default {
  forgotPassword,
  getHome
};
