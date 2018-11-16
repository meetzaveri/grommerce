import React, { Component, Fragment } from 'react';
import InventoryComponent from '../components/Inventory';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <InventoryComponent />
      </Fragment>
    );
  }
}

export default Inventory;
