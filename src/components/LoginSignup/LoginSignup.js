import React from 'react';
import PropTypes from 'prop-types';
import Errorboundary from '../../wrappers/errorBoundary';

import Login from './login';
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
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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
