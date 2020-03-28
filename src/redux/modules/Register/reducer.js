import * as types from './types';

const initialState = () => {
  return {
    data: {
      hasRegistered: false,
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
      rePassword: [],
      register: []
    }
  };
};

export default (state = initialState(), action = {}) => {
  switch (action.type) {
    case types.RESET_FIELDS: {
      return {
        data: {
          hasRegistered: false,
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
          rePassword: [],
          register: []
        }
      };
    }

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

    case types.CREATE_TREE_PENDING: {
      return {
        ...state,
        apiState: {
          pending: true,
          success: false,
          error: false
        }
      };
    }

    case types.CREATE_TREE_SUCCESS: {
      return {
        ...state,
        apiState: {
          pending: false,
          success: true,
          error: false
        }
      };
    }

    case types.CREATE_TREE_ERROR: {
      return {
        ...state,
        apiState: {
          pending: false,
          success: false,
          error: true
        },
        errors: {
          ...state.errors,
          register: [...state.errors.register, action.payload]
        }
      };
    }

    case types.CREATE_ACCOUNT_PENDING: {
      return {
        ...state,
        data: {
          ...state.data,
          hasRegistered: false
        },
        apiState: {
          pending: true,
          success: false,
          error: false
        },
        errors: {
          ...state.errors,
          register: []
        }
      };
    }

    case types.CREATE_ACCOUNT_ERROR: {
      return {
        ...state,
        apiState: {
          pending: false,
          success: false,
          error: true
        },
        errors: {
          ...state.errors,
          register: [action.payload]
        }
      };
    }

    case types.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          hasRegistered: true,
          user: action.payload.user
        },
        errors: {
          ...state.errors,
          register: []
        }
      };
    }

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
