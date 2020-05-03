import * as ac from './actionCreators';
import * as api from '../../../api/profile';
import history from '../../../history';

export const sendCode = (phone) => async (dispatch) => {
  dispatch(ac.asyncSendCode.pending());
  try {
    await api.verifyNumber({ phone });
    dispatch(ac.asyncSendCode.success(phone));
  } catch (error) {
    dispatch(ac.asyncSendCode.error(error.message));
  }
};

export const verifyCode = (code) => async (dispatch, getState) => {
  dispatch(ac.asyncVerifyCode.pending());
  try {
    const { phone } = getState().VerifyNumber.data;
    const res = await api.verifyCode({ phone, code });
    dispatch(ac.asyncVerifyCode.success(res));
    history.push('/profile');
  } catch (error) {
    dispatch(ac.asyncVerifyCode.error(error.message));
  }
};

export const registerError = (error) => async (dispatch) => {
  dispatch(ac.registerError(error));
};

export const unregisterError = (error) => async (dispatch) => {
  dispatch(ac.unregisterError(error));
};
