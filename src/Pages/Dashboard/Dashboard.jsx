import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Row,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge
} from 'reactstrap';
import { Colxx } from '../../components/CustomBootstrap';
import ReactSiema from '../../components/ReactSiema/ReactSiemaCarousel';
import { Link } from 'react-router-dom';
import { LineShadow } from '../../components/Charts';
import { lineChartConfig } from '../../config/chartConfig';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { products } from '../../Data/products';
import { routes } from '../../config/routes';

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
    return (
      <div className="dashboard-wrapper">
        <Row>
          <Colxx lg="12" xl="6">
            <div className="icon-cards-row">
              <ReactSiema
                perPage={{
                  0: 1,
                  320: 2,
                  576: 3,
                  1800: 4
                }}
                controls={false}
                loop={false}
              >
                <div className="icon-row-item mb-4">
                  <Card>
                    <CardBody className="text-center">
                      <i className="iconsminds-clock" />
                      <p className="card-text font-weight-semibold mb-0">
                        Pending Orders
                      </p>
                      <p className="lead text-center">14</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item mb-4">
                  <Card>
                    <CardBody className="text-center">
                      <i className="iconsminds-basket-coins" />
                      <p className="card-text font-weight-semibold mb-0">
                        Completed Orders
                      </p>
                      <p className="lead text-center">32</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item mb-4">
                  <Card>
                    <CardBody className="text-center">
                      <i className="iconsminds-arrow-refresh" />
                      <p className="card-text font-weight-semibold mb-0">
                        Refund Requests
                      </p>
                      <p className="lead text-center">14</p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item mb-4">
                  <Card>
                    <CardBody className="text-center">
                      <i className="iconsminds-mail-read" />
                      <p className="card-text font-weight-semibold mb-0">
                        New Comments
                      </p>
                      <p className="lead text-center">25</p>
                    </CardBody>
                  </Card>
                </div>
              </ReactSiema>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sales</h5>
                <div className="dashboard-line-chart">
                  <LineShadow {...lineChartConfig} />
                </div>
              </div>
            </div>
          </Colxx>
          <Colxx lg="12" xl="6">
            <div className="card mt-lg-0 mt-4">
              <div className="card-body">
                <h5 className="card-title">Recent Orders</h5>
                <div className="scroll dashboard-list-with-thumbs">
                  <PerfectScrollbar>
                    {products.map((product, index) => {
                      return (
                        <div className="d-flex mb-3">
                          <Link
                            className="position-relative"
                            to={routes.productInfo.replace(':id', product.id)}
                          >
                            <img
                              src={`https://gogo-react.coloredstrategies.com/${product.img}`}
                              alt={product.name}
                              className="list-thumbnail"
                            />
                            <Badge
                              pill
                              className="position-absolute badge-top-right"
                            >
                              {product.status}
                            </Badge>
                          </Link>
                          <div className="pl-3 pr-2 pt-2 pb-2">
                            <Link
                              to={routes.productInfo.replace(':id', product.id)}
                            >
                              <p className="list-item-heading">
                                {product.name}
                              </p>
                              <div className="pr-4">
                                <p className="text-muted text-small">
                                  {product.description}
                                </p>
                              </div>
                              <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                                {product.createDate}
                              </div>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </div>
            </div>
          </Colxx>
        </Row>
      </div>
    );
  }
}
