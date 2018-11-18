import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const baseURL = '';

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

class App extends React.Component {
  render() {
    return (
        <Router
        basename={ baseURL }
      >
            <div>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Switch>
                    <Route exact path="/" component={ () => (<div>Default homepage</div>) } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/about" component={ About } />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
