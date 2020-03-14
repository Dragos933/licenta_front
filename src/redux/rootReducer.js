import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Login from './modules/Login/reducer';
import Register from './modules/Register/reducer';

export default combineReducers({
  routing: routerReducer,
  Login,
  Register,
});
