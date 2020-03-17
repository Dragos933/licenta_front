import React, { Component } from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import history from '../../../../history';
import { isLoggedIn } from '../../../../utils';

import Login from '../../../Login/containers/LoginContainer';
import Register from '../../../Register/containers/RegisterContainer';
import ForgotPassword from '../../../ForgotPassword/containers/ForgotPasswordContainer';

const PrivateRoute = ({ component: Component, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to='/' />}
    />
  );
};

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <main>
          <Route exact path='/' component={ForgotPassword} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute />
        </main>
      </Router>
    );
  }
}
