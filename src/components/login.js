import React from 'react';
import PropTypes from 'prop-types';
import Errorboundary from '../wrappers/errorBoundary';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    return <Errorboundary>lofin page</Errorboundary>;
  }
}
NormalLoginForm.propTypes = {
  form: PropTypes.object
};

export default NormalLoginForm;
