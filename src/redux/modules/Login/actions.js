import * as ac from './actionCreators';
import api from '../../../api/auth';
import history from '../../../history';

export const login = (data) => async (dispatch) => {
  dispatch(ac.asyncLogin.pending());
  try {
    const res = await api.login(data);
    localStorage.setItem('token', res.data.jwt);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    dispatch(ac.asyncLogin.success(res.data));
    history.push('/home');
  } catch (error) {
    dispatch(ac.asyncLogin.error(error));
  }
};

export const setField = (data) => async (dispatch) => {
  dispatch(ac.setField(data));
};
