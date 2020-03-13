import * as types from './types';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const setField = actionCreator(types.SET_FIELD);

export const alamieno = actionCreator();

export const asyncLogin = asyncActionCreator(
  types.LOGIN_PENDING,
  types.LOGIN_SUCCESS,
  types.LOGIN_ERROR
);
