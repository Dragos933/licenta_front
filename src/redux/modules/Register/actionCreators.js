import * as types from './types';
import { actionCreator, asyncActionCreator } from '../../../utils/redux';

export const setField = actionCreator(types.SET_FIELD);

export const registerError = actionCreator(types.REGISTER_ERROR);
export const unregisterError = actionCreator(types.UNREGISTER_ERROR);
