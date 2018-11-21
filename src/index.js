import React from 'react';
import ReactDOM from 'react-dom';
import './scss';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { BrowserRouter as Router } from 'react-router-dom';
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
