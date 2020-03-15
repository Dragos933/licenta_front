import * as types from './types';

const initialState = () => {
  return {
    data: {
      register: {
        username: null,
        email: null,
        pass: null,
        rePassword: null
      }
    },
    apiStatus: {
      pending: false,
      success: false,
      error: false
    },
    errors: {
      username: [],
      email: [],
      pass: [],
      rePassword: []
    }
  };
};

export default (state = initialState(), action = {}) => {
  switch (action.type) {
    case types.SET_FIELD:
      return {
        ...state,
        data: {
          ...state.data,
          register: {
            ...state.data.register,
            ...action.payload
          }
        }
      };

    case types.UNREGISTER_ERROR: {
      const { key, error } = action.payload;
      const index = state.errors[key].indexOf(error);
      state.errors[key].splice(index, 1);
      return state;
    }

    case types.REGISTER_ERROR: {
      const { key, error } = action.payload;
      if (state.errors[key].includes(error)) {
        return state;
      }
      return {
        ...state,
        errors: {
          ...state.errors,
          [key]: [...state.errors[key], error]
        }
      };
    }
    default:
      return state;
  }
};
