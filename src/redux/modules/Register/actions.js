import * as ac from './actionCreators';
import api from '../../../api/auth';

export const resetFields = () => async (dispatch) => {
  dispatch(ac.resetFields());
};

export const sendEmail = () => async (dispatch, getState) => {
  dispatch(ac.asyncSendEmail.pending());
  try {
    const { user } = getState().Register.data;
    const res = await api.sendEmail({ email: user.email });
    dispatch(ac.asyncSendEmail.success(res));
  } catch (error) {
    dispatch(ac.asyncSendEmail.error(error));
  }
};

export const createTree = () => async (dispatch, getState) => {
  dispatch(ac.asyncCreateTree.pending());
  try {
    const { user } = getState().Register.data;
    const res = await api.createTree({
      user: user.id,
      level: 1,
      description: 'Your tree is level 1!'
    });
    dispatch(ac.asyncCreateTree.success(res.data));
  } catch (error) {
    dispatch(ac.asyncCreateTree.error(error.message));
  }
};

export const register = (data) => async (dispatch) => {
  dispatch(ac.asyncRegister.pending());
  try {
    const res = await api.register(data);
    await api.updateFirstRegister(res.data.user.id);
    dispatch(ac.asyncRegister.success(res.data));
  } catch (error) {
    dispatch(ac.asyncRegister.error(error.message));
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
