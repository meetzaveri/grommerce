import React from 'react';
// import PropTypes from 'prop-types';
import Forminput from '../components/Form/Forminput';
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  render() {
    return (
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
    );
  }
}
Login.propTypes = {
  // form: PropTypes.object
};

export default Login;
