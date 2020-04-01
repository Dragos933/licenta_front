import * as types from './types';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const setField = actionCreator(types.SET_FIELD);

export const registerError = actionCreator(types.REGISTER_ERROR);

export const unregisterError = actionCreator(types.UNREGISTER_ERROR);

export const resetFields = actionCreator(types.RESET_FIELDS);

export const asyncRegister = asyncActionCreator(
  types.CREATE_ACCOUNT_PENDING,
  types.CREATE_ACCOUNT_SUCCESS,
  types.CREATE_ACCOUNT_ERROR
);

export const asyncCreateTree = asyncActionCreator(
  types.CREATE_TREE_PENDING,
  types.CREATE_TREE_SUCCESS,
  types.CREATE_TREE_ERROR
);

export const asyncSendEmail = asyncActionCreator(
  types.SEND_EMAIL_PENDING,
  types.SEND_EMAIL_SUCCESS,
  types.SEND_EMAIL_ERROR
);
