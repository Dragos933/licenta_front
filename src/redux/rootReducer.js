import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Login from './modules/Login/reducer';

export default combineReducers({
  routing: routerReducer,
  Login
});
