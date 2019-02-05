import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import AboutScreen from './screens/about';

const baseURL = '/ceva';

const Loading = () => (
    <div style={ {
    width: '1000px',
    height: '1000px',
    backgroundColor: 'red'
  } }>Loading</div>
)

const Login = Loadable({
  loader: () => import('./screens/login'),
  loading: Loading
})

const About = Loadable({
  loader: () => import('./screens/about'),
  loading: Loading
})

const routes = () => (
  <Router
    basename={ baseURL }
  >
    <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/about" component={ AboutScreen } />
        <Route path="/" component={ () => (<div>
          Default homepage
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>            
      </div>) } />

    </Switch>
  </Router>
);

export default routes;
