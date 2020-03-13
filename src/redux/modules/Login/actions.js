import * as ac from './actionCreators';

export const login = (data) => async (dispatch) => {
  dispatch(ac.asyncLogin.pending());
  console.log(data);
};

export const setField = (data) => async (dispatch) => {
  dispatch(ac.setField(data));
};
