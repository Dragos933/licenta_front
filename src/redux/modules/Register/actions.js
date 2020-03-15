import * as ac from './actionCreators';

export const setField = (data) => async (dispatch) => {
  dispatch(ac.setField(data));
}

export const registerError = (data) => async (dispatch) => {
  dispatch(ac.registerError(data));
}
