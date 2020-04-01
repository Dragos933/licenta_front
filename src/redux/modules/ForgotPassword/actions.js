import * as ac from './actionCreators';
import api from '../../../api/auth';

export const sendEmail = (data) => async (dispatch) => {
  dispatch(ac.asyncSendEmail.pending());
  try {
    const res = await api.forgotPassword(data);
    dispatch(ac.asyncSendEmail.success(res.data));
  } catch (error) {
    dispatch(ac.asyncSendEmail.error(error));
  }
};
