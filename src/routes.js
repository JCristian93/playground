import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './screens/About';
import Login from './screens/login';

const baseURL = 'localhost:3000';

class App extends Component {
  render() {
    return (
      <Router
        basename={baseURL}
      >
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
