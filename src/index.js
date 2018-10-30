import React from 'react';
import ReactDOM from 'react-dom';
import './scss';
import Login from './components/login';
import Routes from './config/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class Main extends React.Component {
  render() {
    return (
      <Router>
        <Route path={Routes.login} component={Login} />
      </Router>
    );
  }
}

let App = document.getElementById('root');

ReactDOM.render(<Main />, App);
