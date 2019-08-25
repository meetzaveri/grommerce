import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductCard from '../../components/ProductCard';

import { inject, observer } from 'mobx-react';
import AddProductModal from '../../components/Modals/AddProductModal';
import { debouncedSearch } from '../../Util/Utils';

const BreadcrumbItems = [
  { name: 'Home', link: '/' },
  { name: 'Pages', link: '/pages' },
  { name: 'Product', link: '/product' }
];

@inject('productsStore')
@observer
class AllProducts extends Component {
  state = {
    isLoading: false,
    addProductModal: false,
    search: ''
  };
  search = searchItem => {
    const { productsStore } = this.props;
    this.setState({
      isLoading: false
    });
    return productsStore.searchItems(searchItem);
  };

  onSearch = value => {
    this.setState(
      {
        search: value,
        isLoading: true
      },
      () => {
        debouncedSearch(() => this.search(this.state.search), 1200);
      }
    );
  };
  render() {
    const { productsStore } = this.props;
    return (
      <div className="dashboard-wrapper">
        <div className="row">
          <div className="col-12">
            <h1>All Products</h1>
            <nav className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <Breadcrumb items={BreadcrumbItems} />
            </nav>
            <button
              className="btn btn-primary float-right"
              onClick={() => this.setState({ addProductModal: true })}
            >
              Add Product
            </button>
          </div>
          <div className="col-12 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Products"
              onChange={e => this.onSearch(e.target.value)}
            />
          </div>
          {/* If state is loading, i.e., if the request has gone for searching */}
          {this.state.isLoading ? (
            <div className="loading" />
          ) : productsStore.searchedProducts.length > 0 ? (
            productsStore.searchedProducts.map((product, index) => {
              return <ProductCard {...product} key={index} />;
            })
          ) : (
            <div className="col-12">
              <p className="text-justify font-weight-bold">No results found</p>
            </div>
          )}
        </div>
        <AddProductModal
          isOpen={this.state.addProductModal}
          toggle={() =>
            this.setState({ addProductModal: !this.state.addProductModal })
          }
        />
      </div>
    );
  }
}

export default AllProducts;
