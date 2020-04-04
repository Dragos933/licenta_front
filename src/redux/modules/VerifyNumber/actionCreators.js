import * as types from './types';
import { asyncActionCreator, actionCreator } from '../../../utils/redux';

export const asyncSendCode = asyncActionCreator(
  types.SEND_CODE_PENDING,
  types.SEND_CODE_SUCCESS,
  types.SEND_CODE_ERROR
);

export const asyncVerifyCode = asyncActionCreator(
  types.VERIFY_CODE_PENDING,
  types.VERIFY_CODE_SUCCESS,
  types.VERIFY_CODE_ERROR
);

export const registerError = actionCreator(types.REGISTER_ERROR);
export const unregisterError = actionCreator(types.UNREGISTER_ERROR);
