import React from 'react';
import PropTypes from 'prop-types';
import Errorboundary from '../../wrappers/errorBoundary';

import Login from './Login';
import Signup from './Signup';
class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'signup'
    };
  }
  handleTabClick = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    return (
      <Errorboundary>
        <div className="form">
          <ul className="tab-group">
            <li
              className={`tab ${this.state.activeTab == 'signup' && 'active'}`}
            >
              <a onClick={() => this.handleTabClick('signup')}>Sign Up</a>
            </li>
            <li
              className={`tab ${this.state.activeTab == 'login' && 'active'}`}
            >
              <a onClick={() => this.handleTabClick('login')}>Log In</a>
            </li>
          </ul>

          <div className="tab-content">
            {this.state.activeTab == 'signup' ? <Signup /> : <Login />}
          </div>
        </div>
      </Errorboundary>
    );
  }
}
LoginSignup.propTypes = {
  form: PropTypes.object
};

export default LoginSignup;
