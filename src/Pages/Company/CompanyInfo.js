import React, { useState } from 'react';
import { NavItem, NavLink } from 'reactstrap';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { SmallLineChart } from '../../components/Charts';
import {
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from '../../config/chartConfig';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const COMPANY_INFO = gql`
  query getCompany($id: UUID!) {
    company: companyById(id: $id) {
      name
      website
      description
      image: imageUrl
      products: productsByCompanyId {
        nodes {
          name
          price
          discounted_price: discountedPrice
          mrp: marketPrice
          image: imageUrl
          quantity
        }
      }
    }
  }
`;

const CompanyInfo = props => {
  const [activeTab, setActiveTab] = useState('details');
  const param = props.match.params.id;
  return (
    <Query query={COMPANY_INFO} variables={{ id: param }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { company } = data;
        const { products } = company;
        return (
          <div className="dashboard-wrapper">
            <div className="row">
              <div className="col-12">
                <h1>{company.name}</h1>
                <nav
                  className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/" className="active" aria-current="page">
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/" className="active" aria-current="page">
                        <span>Companies</span>
                      </a>
                    </li>
                    <li className="active breadcrumb-item">
                      <span>{company.name}</span>
                    </li>
                  </ol>
                </nav>
                <ul className="separator-tabs ml-0 mb-5 nav nav-tabs">
                  <NavItem>
                    <NavLink
                      className={activeTab === 'details' ? 'active' : null}
                      onClick={() => setActiveTab('details')}
                    >
                      <span> Details</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === 'products' ? 'active' : null}
                      onClick={() => setActiveTab('products')}
                    >
                      <span>Products</span>
                    </NavLink>
                  </NavItem>
                </ul>
                {activeTab === 'details' ? (
                  <div className="tab-content">
                    <div className="tab-pane active">
                      <div className="row">
                        <div className="mb-4 col-12 col-lg-4">
                          <div className="card mb-4">
                            <div className="position-absolute card-top-buttons">
                              <button className="icon-button btn btn-outline-white">
                                <i className="simple-icon-pencil"></i>
                              </button>
                            </div>
                            <img
                              src={company.image}
                              alt={company.category}
                              className="card-img-fluid card-img-top"
                            />

                            <div className="card-body">
                              <p className="text-muted text-small mb-2">
                                <span>Description</span>
                              </p>
                              <p className="mb-3">{company.description}</p>
                              <p className="text-muted text-small mb-2">
                                <span>Website</span>
                              </p>
                              <a
                                className="mb-3 text-primary"
                                href={company.website}
                                target="noopener noreferrer"
                              >
                                {company.website}
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="mb-4 col-12">
                              <div className="card">
                                <div className="d-flex justify-content-between align-items-center card-body">
                                  <div className="mb-0 card-title">
                                    Order Status
                                  </div>
                                  <div className="progress-bar-circle">
                                    <CircularProgressbar
                                      strokeWidth={5}
                                      value={85}
                                      text={'85%'}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-8">
                          <div className="row">
                            <div className="mb-4 col-6">
                              <div className="dashboard-small-chart-analytics card">
                                <div className="card-body">
                                  <SmallLineChart {...smallChartData1} />
                                </div>
                              </div>
                            </div>
                            <div className="mb-4 col-6">
                              <div className="dashboard-small-chart-analytics card">
                                <div className="card-body">
                                  <SmallLineChart {...smallChartData2} />
                                </div>
                              </div>
                            </div>
                            <div className="mb-4 col-6">
                              <div className="dashboard-small-chart-analytics card">
                                <div className="card-body">
                                  <SmallLineChart {...smallChartData3} />
                                </div>
                              </div>
                            </div>
                            <div className="mb-4 col-6">
                              <div className="dashboard-small-chart-analytics card">
                                <div className="card-body">
                                  <SmallLineChart {...smallChartData4} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="tab-content">
                    {products.nodes.map(product => {
                      return (
                        <div className="row" key={product.id}>
                          <div className="col">
                            <div className="d-flex flex-row mb-3 card">
                              <div className="d-flex flex-grow-1 min-width-zero">
                                <div className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center card-body">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="mb-1 truncate w-10 w-xs-100"
                                  />
                                  <a className="list-item-heading mb-1 truncate w-20 w-xs-100">
                                    {product.name}
                                  </a>
                                  <strike className="mb-1 text-muted text-small w-15 w-xs-100">
                                    &#8377; {product.mrp}
                                  </strike>
                                  <p className="mb-1 text-muted text-small w-15 w-xs-100">
                                    &#8377; {product.discounted_price}
                                  </p>
                                  <div className="w-15 w-xs-100 text-right">
                                    <span className="badge badge-secondary badge-pill text-uppercase">
                                      {product.quantity}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default CompanyInfo;
