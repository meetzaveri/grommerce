import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div>Inventory Page</div>
      </Fragment>
    );
  }
}

export default Inventory;
