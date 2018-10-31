import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Forminput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  handleFocus = () => {
    this.setState({ isEditing: true });
  };
  handleBlur = e => {
    console.log(e.target.value);
    if (!e.target.value) {
      this.setState({ isEditing: false });
    }
  };

  render() {
    const { label } = this.props;
    return (
      <div className="field-wrap ">
        <label className={`${this.state.isEditing && 'active highlight'}`}>
          {label}
          <span className="req">*</span>
        </label>
        <input
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...this.props.inputProps}
        />
      </div>
    );
  }
}

Forminput.prototypes = {
  label: PropTypes.string
};
