import React from 'react';
import Routes from '../config/routes';

//Auth Wrapper as part of navigation guard
export const auth = Component => {
  class Auth extends React.Component {
    state = {};
    componentDidMount() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.props.history.replace(Routes.login);
      }
    }
    render() {
      // re-check the token
      const token = localStorage.getItem('token');
      return token ? <Component {...this.props} /> : null;
    }
  }

  return Auth;
};
