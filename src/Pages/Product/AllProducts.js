import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductCard from '../../components/ProductCard';

import { inject, observer } from 'mobx-react';
import AddProductModal from '../../components/Modals/AddProductModal';
import { debouncedSearch } from '../../Util/Utils';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const BreadcrumbItems = [
  { name: 'Home', link: '/' },
  { name: 'Pages', link: '/pages' },
  { name: 'Product', link: '/product' }
];

const GET_PRODUCTS = gql`
  {
    allProducts {
      nodes {
        name
        quantity
        company: companyByCompanyId {
          name
          email
        }
      }
    }
  }
`;

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
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

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
                {data.allProducts.nodes.map(product => (
                  <ProductCard {...product} />
                ))}
              </div>
              <AddProductModal
                isOpen={this.state.addProductModal}
                toggle={() =>
                  this.setState({
                    addProductModal: !this.state.addProductModal
                  })
                }
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default AllProducts;
