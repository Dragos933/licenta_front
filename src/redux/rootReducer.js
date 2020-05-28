import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Login from './modules/Login/reducer';
import Register from './modules/Register/reducer';
import ForgotPassword from './modules/ForgotPassword/reducer';
import VerifyNumber from './modules/VerifyNumber/reducer';
import Profile from './modules/Profile/reducer';
import CreateEvent from './modules/CreateEvent/reducer';
import ResetPassword from './modules/ResetPassword/reducer';
import EventPage from './modules/EventPage/reducer';

export default combineReducers({
  routing: routerReducer,
  Login,
  Register,
  ForgotPassword,
  VerifyNumber,
  Profile,
  CreateEvent,
  ResetPassword,
  EventPage,
});
