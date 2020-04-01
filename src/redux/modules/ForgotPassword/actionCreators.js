import * as types from './types';
import { asyncActionCreator } from '../../../utils/redux';

export const asyncSendEmail = asyncActionCreator(
  types.SEND_EMAIL_PENDING,
  types.SEND_EMAIL_SUCCESS,
  types.SEND_EMAIL_ERROR
);
