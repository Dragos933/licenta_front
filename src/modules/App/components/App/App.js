import React, { Component } from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import history from '../../../../history';
import { isLoggedIn } from '../../../../utils';

import Login from '../../../Login/containers/LoginContainer';

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
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute />
        </main>
      </Router>
    );
  }
}
