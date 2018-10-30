import React from 'react';
import PropTypes from 'prop-types';
import Errorboundary from '../../wrappers/errorBoundary';
import Forminput from '../../components/Form/Forminput';
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
            {this.state.activeTab == 'signup' ? (
              <div id="signup">
                <h1>Sign Up for Free</h1>

                <form action="/" method="post">
                  <div className="top-row">
                    <Forminput
                      label="First Name"
                      inputProps={{
                        type: 'text',
                        required: true,
                        autoComplete: 'off'
                      }}
                    />
                    <Forminput
                      label="Last Name"
                      inputProps={{
                        type: 'text',
                        required: true,
                        autoComplete: 'off'
                      }}
                    />
                  </div>
                  <Forminput
                    label="Email Address"
                    inputProps={{
                      type: 'email',
                      required: true,
                      autoComplete: 'off'
                    }}
                  />
                  <Forminput
                    label="Set A Password"
                    inputProps={{
                      type: 'password',
                      required: true,
                      autoComplete: 'off'
                    }}
                  />

                  <button type="submit" className="button button-block">
                    Get Started
                  </button>
                </form>
              </div>
            ) : (
              <div id="login">
                <h1>Welcome Back!</h1>

                <form action="/" method="post">
                  <Forminput
                    label="Email Address"
                    inputProps={{
                      type: 'email',
                      required: true,
                      autoComplete: 'off'
                    }}
                  />
                  <Forminput
                    label="Password"
                    inputProps={{
                      type: 'password',
                      required: true,
                      autoComplete: 'off'
                    }}
                  />

                  <p className="forgot">
                    <a href="#">Forgot Password?</a>
                  </p>

                  <button className="button button-block">Log In</button>
                </form>
              </div>
            )}
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
