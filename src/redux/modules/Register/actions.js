import * as ac from './actionCreators';

export const register = (data) => async (dispatch) => {
  dispatch(ac.asyncRegister.pending());
  try {
    console.log(data);
    dispatch(ac.asyncRegister.success());
  } catch (error) {
    dispatch(ac.asyncRegister.error(error));
  }
};

export const setField = (data) => async (dispatch) => {
  dispatch(ac.setField(data));
};

export const registerError = (data) => async (dispatch) => {
  dispatch(ac.registerError(data));
};

export const unregisterError = (data) => async (dispatch) => {
  dispatch(ac.unregisterError(data));
};
