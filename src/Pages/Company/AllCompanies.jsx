import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CompanyCard from '../../components/CompanyCard';

import AddProductModal from '../../components/Modals/AddProductModal';
import { debouncedSearch } from '../../Util/Utils';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const BreadcrumbItems = [
  { name: 'Home', link: '/' },
  { name: 'Pages', link: '/pages' },
  { name: 'Company', link: '/company/all' }
];

const GET_COMPANIES = gql`
  {
    allCompanies {
      nodes {
        id
        name
        email
        website
        description
        img: imageUrl
      }
    }
  }
`;

class AllCompanies extends Component {
  state = {
    isLoading: false,
    addProductModal: false,
    search: ''
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
    return (
      <Query query={GET_COMPANIES}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div className="dashboard-wrapper">
              <div className="row">
                <div className="col-12">
                  <h1>All Companies</h1>
                  <nav className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
                    <Breadcrumb items={BreadcrumbItems} />
                  </nav>
                  <button
                    className="btn btn-primary float-right"
                    onClick={() => this.setState({ addProductModal: true })}
                  >
                    Add Company
                  </button>
                </div>
                <div className="col-12 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for Companies"
                    onChange={e => this.onSearch(e.target.value)}
                  />
                </div>
                {/* If state is loading, i.e., if the request has gone for searching */}
                {data.allCompanies.nodes.map(company => (
                  <CompanyCard {...company} key={company.id} />
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

export default AllCompanies;
