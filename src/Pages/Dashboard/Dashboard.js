import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

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
      <>
        <h2>You have {headerStore.itemCount} items</h2>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="text"
            onChange={e => this.setState({ itemName: e.target.value })}
            placeholder="Add a item"
            value={this.state.itemName}
          />
          <button className="btn btn-primary" onSubmit={e => this.onSubmit(e)}>
            Add item
          </button>
          <h3>Items in Cart</h3>
          <ul>
            {headerStore.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </form>
      </>
    );
  }
}
