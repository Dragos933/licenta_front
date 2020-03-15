import * as types from './types';

const initialState = () => {
  return {
    data: {
      register: {
        username: null,
        email: null,
        pass: null,
        rePassword: null,
      },
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
      rePassword: [],
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
            ...action.payload,
          }
        }
      }

    case types.REGISTER_ERROR:
    {
      const { key, error, registerType } = action.payload;
      if (registerType === 'register') {
        if (state.errors[key].includes(error[key])) {
          return state;
        }
        return {
          ...state,
          errors: {
            ...state.errors,
            [key]: [...state.errors[key], error[key]],
          }
        }
      } else {
        const index = state.errors[key].indexOf(error[key]);
        state.errors[key].splice(index, 1);
        return {
          ...state,
        };
      }
    }
    default:
      return state;
  }
};
