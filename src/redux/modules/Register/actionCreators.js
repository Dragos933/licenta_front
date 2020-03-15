import * as types from './types';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const setField = actionCreator(types.SET_FIELD);

export const registerError = actionCreator(types.REGISTER_ERROR);

export const unregisterError = actionCreator(types.UNREGISTER_ERROR);

export const asyncRegister = asyncActionCreator(
  types.CREATE_ACCOUNT_PENDING,
  types.CREATE_ACCOUNT_SUCCESS,
  types.CREATE_ACCOUNT_ERROR
);
