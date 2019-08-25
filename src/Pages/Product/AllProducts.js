import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductCard from '../../components/ProductCard';

import { inject, observer } from 'mobx-react';
import AddProductModal from '../../components/Modals/AddProductModal';

const BreadcrumbItems = [
  { name: 'Home', link: '/' },
  { name: 'Pages', link: '/pages' },
  { name: 'Product', link: '/product' }
];

@inject('productsStore')
@observer
class AllProducts extends Component {
  state = {
    addProductModal: false
  };
  debouncedSearch = (func, delay) => {
    clearTimeout(timerId);
    let timerId = setTimeout(func, delay);
  };
  search = searchItem => {
    const { productsStore } = this.props;
    return productsStore.searchItems(searchItem);
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
              onChange={e =>
                this.debouncedSearch(() => this.search(e.target.value), 5000)
              }
            />
          </div>
          {productsStore.searchedProducts.map((product, index) => {
            return <ProductCard {...product} key={index} />;
          })}
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
