import * as ac from './actionCreators';

export const login = (data) => async (dispatch) => {
  dispatch(ac.asyncLogin.pending());
  try {
    dispatch(ac.asyncLogin.success(data));
  } catch (error) {
    dispatch(ac.asyncLogin.error(error));
  }
};

export const setField = (data) => async (dispatch) => {
  dispatch(ac.setField(data));
};
