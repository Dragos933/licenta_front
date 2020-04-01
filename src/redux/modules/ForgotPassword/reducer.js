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
    case types.SET_FIELD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.key]: action.payload.value
        }
      };

    case types.SEND_EMAIL_PENDING: {
      return {
        ...state,
        apiState: {
          pending: true,
          success: false,
          error: false
        }
      };
    }

    case types.SEND_EMAIL_SUCCESS: {
      return {
        ...state,
        apiState: {
          pending: false,
          success: true,
          error: false
        }
      };
    }

    case types.SEND_EMAIL_ERROR: {
      console.log(action.payload);
      return {
        ...state,
        apiState: {
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
