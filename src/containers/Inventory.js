import React, { Component, Fragment } from 'react';
import InventoryComponent from 'components/Inventory/inventory';
import Errorboundary from 'wrappers/errorBoundary';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Errorboundary>
        <Fragment>
          <InventoryComponent />
        </Fragment>
      </Errorboundary>
    );
  }
}

export default Inventory;
