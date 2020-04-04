import * as types from './types';

const initialState = () => {
  const token = localStorage.getItem('auth_token') || '';
  return {
    data: {
      code: '',
      emailSent: false
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
    case types.UNREGISTER_ERROR: {
      if (state.errors.indexOf(action.payload) !== -1) {
        state.errors.splice(action.payload, 1);
        return {
          ...state,
          errors: state.errors
        };
      }
      return state;
    }

    case types.REGISTER_ERROR: {
      if (state.errors.indexOf(action.payload) === -1) {
        return {
          ...state,
          errors: [...state.errors, action.payload]
        };
      }
      return state;
    }

    case types.SEND_CODE_PENDING: {
      state.errors.splice('- Error sending the code!', 1);
      return {
        ...state,
        apiStatus: {
          pending: true,
          success: false,
          error: false
        },
        errors: state.errors
      };
    }

    case types.SEND_CODE_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          phone: action.payload,
          emailSent: true
        },
        apiStatus: {
          pending: false,
          success: true,
          error: false
        }
      };
    }

    case types.SEND_CODE_ERROR: {
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

    case types.VERIFY_CODE_PENDING: {
      state.errors.splice('- Error verifying the code!');
      return {
        ...state,
        apiStatus: {
          pending: true,
          success: false,
          error: false
        },
        errors: state.errors
      };
    }

    case types.VERIFY_CODE_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          isVerified: action.payload.statusText
        },
        apiStatus: {
          pending: false,
          success: true,
          error: false
        }
      };
    }

    case types.VERIFY_CODE_ERROR: {
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
