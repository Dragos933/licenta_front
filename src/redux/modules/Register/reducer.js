import * as types from './types';

const initialState = () => {
  return {
    data: {
      register: {
        username: null,
        email: null,
        password: null,
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
      password: [],
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

    case types.UNREGISTER_ERROR:
    {
      const { key, error } = action.payload;
      if (state.errors[key].includes(error[key])) {
        const errors = {
          ...state.errors,
          [key]: [...state.errors[key].filter(item => item !== error[key])]
        }
        return {
          ...state,
          errors: {
            ...errors,
          }
        };
      }
      return {
        ...state,
      }
    }

    case types.REGISTER_ERROR:
    {
      const { key, error } = action.payload;
      const errors = {
        ...state.errors,
        [key]: [...state.errors[key], error[key]],
      }
      if (state.errors[key].includes(error[key])) {
        return state;
      }

      return {
        ...state,
        errors: {
          ...errors,
        }
      };
    }
    default:
      return state;
  }
};
