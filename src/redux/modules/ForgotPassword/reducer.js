import * as types from './types';

const initialState = () => {
  const token = localStorage.getItem('auth_token') || '';
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
    case types.SEND_EMAIL_PENDING: {
      return {
        ...state,
        apiStatus: {
          pending: true,
          success: false,
          error: false
        }
      };
    }

    case types.SEND_EMAIL_SUCCESS: {
      return {
        ...state,
        apiStatus: {
          pending: false,
          success: true,
          error: false
        }
      };
    }

    case types.SEND_EMAIL_ERROR: {
      return {
        ...state,
        apiStatus: {
          pending: false,
          success: false,
          error: true
        },
        errors: [...state.errors, action.payload]
      };
    }

    default:
      return state;
  }
};
