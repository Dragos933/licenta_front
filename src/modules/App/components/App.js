import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../../../history';

import LandingPage from '../../LandingPage/containers/LandingPageContainer';
import IntegrationProcess from '../../IntegrationProcess/containers/IntegrationProcessContainer';
export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route
            exact
            path='/process-of-integration'
            component={IntegrationProcess}
          />
        </main>
      </Router>
    );
  }
}
