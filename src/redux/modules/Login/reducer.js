import * as types from './types';

const initialState = () => {
  const token = localStorage.getItem('auth_token') || '';
  return {
    data: {
      token,
      hasSubmitted: false
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

    case types.LOGIN_ERROR:
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          pending: false,
          error: true
        },
        errors: [...state.errors, 'Invalid credentials!']
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        apiStatus: {
          ...state.apiStatus,
          pending: false,
          error: false,
          success: true
        },
        data: {
          ...state.data,
          hasSubmitted: true
        }
      };

    default:
      return state;
  }
};
