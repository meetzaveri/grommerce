import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {Row} from 'reactstrap'

@inject('headerStore')
@observer
export default class Dashboard extends Component {
  state = {
    itemName: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.headerStore.addItem(this.state.itemName);
    this.setState({
      itemName: ''
    });
  };

  render() {
    const { headerStore } = this.props;
    return (
      <Row>
        
      </Row>
    );
  }
}
