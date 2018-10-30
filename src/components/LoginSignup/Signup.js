import React from 'react';
import PropTypes from 'prop-types';
import Forminput from '../components/Form/Forminput';
class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}
Signup.propTypes = {};

export default Signup;
