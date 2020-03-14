import * as ac from './actionCreators';

export const setField = (data) => async (dispatch) => {
  dispatch(ac.setField(data));
}

export const registerError = (data) => async (dispatch) => {
  console.log(data);
  dispatch(ac.registerError(data));
}
