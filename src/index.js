import React from 'react';
import ReactDOM from 'react-dom';
import './scss';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Routes from './config/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class Main extends React.Component {
  render() {
    return (
      <Router>
        {/* <Route path={Routes.login} component={LoginSignup} /> */}
        <LoginSignup />
      </Router>
    );
  }
}

let App = document.getElementById('root');

ReactDOM.render(<Main />, App);
