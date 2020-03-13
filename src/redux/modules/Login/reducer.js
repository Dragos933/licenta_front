import * as types from './types';

const initialState = () => {
  const token = localStorage.getItem('auth_token') || '';
  console.log(token);
  return {
    data: {
      token
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
    case types.SET_FIELD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value
        }
      };

    case types.LOGIN_PENDING:
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          pending: true
        }
      };
    default:
      return state;
  }
};
