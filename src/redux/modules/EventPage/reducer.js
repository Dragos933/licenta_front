import * as types from './types';

const initialState = () => {
  return {
    data: {
    },
    apiStatus: {
      pending: false,
      success: false,
      error: false
    },
    errors: []
  };
};

export default (state = initialState(), action = {}) => {
  switch (action.type) {
    

    default:
      return state;
  }
};
