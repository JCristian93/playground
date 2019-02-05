import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './routes-config';

const baseURL = '';

const renderRouteConfigs = (configs) => {
  return (
    configs.map((routeConfig) => (
      <Route {...routeConfig} />
    ))
  );
}

const routes = () => (
  <Router
    basename={ baseURL }
  >
    <Switch>
      {renderRouteConfigs(publicRoutes)}
    </Switch>
  </Router>
);

export default routes;
