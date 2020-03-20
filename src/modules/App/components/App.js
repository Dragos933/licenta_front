import React, { Component } from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import history from '../../../history';
import { isLoggedIn } from '../../../utils';

import Login from '../../Login/containers/LoginContainer';
import Register from '../../Register/containers/RegisterContainer';
import ForgotPassword from '../../ForgotPassword/containers/ForgotPasswordContainer';
import LandingPage from '../../LandingPage/containers/LandingPageContainer';
import Home from '../../Home/containers/HomeContainer';

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
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/home' component={Home} />
          <PrivateRoute />
        </main>
      </Router>
    );
  }
}
