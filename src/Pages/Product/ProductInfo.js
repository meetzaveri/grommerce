import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const BreadcrumbItems = [
  { name: 'Home', link: '/' },
  { name: 'Pages', link: '/pages' },
  { name: 'Product', link: '/product' }
];

class ProductInfo extends Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <div className="row">
          <div className="col-12">
            <h1>Chocolate Cake</h1>
            <nav className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <Breadcrumb items={BreadcrumbItems} />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
