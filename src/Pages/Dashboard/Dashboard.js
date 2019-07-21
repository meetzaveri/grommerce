import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Card, CardBody, CardTitle, NavLink, Badge } from 'reactstrap';
import { Colxx } from '../../components/CustomBootstrap';
import ReactSiema from '../../components/ReactSiema/ReactSiemaCarousel';
import { LineShadow } from '../../components/Charts';
import { lineChartConfig } from '../../config/chartConfig';
import PerfectScrollbar from 'react-perfect-scrollbar';
import productsData from '../../Data/products.json';
// import images from '../../assets/img/*.jpg';

// const recentOrders = productsData.data.slice(0, 6);

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
            <div className="dashboard-line-chart">
              <LineShadow {...lineChartConfig} />
            </div>
          </Colxx>
          {/* <Colxx lg="12" xl="6" className="mb-4">
            <Card>
              <div className="position-absolute card-top-buttons">
                <button className="btn btn-header-light icon-button">
                  <i className="simple-icon-ref" />
                </button>
              </div>
              <CardBody>
                <CardTitle>
                  {' '}
                  <h5 className="card-title">Recent Orders</h5>{' '}
                </CardTitle>
                <div className="scroll dashboard-list-with-thumbs">
                  <PerfectScrollbar
                    option={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {recentOrders.map((order, index) => {
                      return (
                        <div key={index} className="d-flex flex-row mb-3">
                          <NavLink
                            to="/app/pages/details"
                            className="d-block position-relative"
                          >
                            <img
                              src={order.img}
                              alt={order.name}
                              className="list-thumbnail border-0"
                            />
                            <Badge
                              key={index}
                              className="position-absolute badge-top-right"
                              color={order.statusColor}
                              pill
                            >
                              {order.status}
                            </Badge>
                          </NavLink>

                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <NavLink to="/app/pages/details">
                              <p className="list-item-heading">{order.name}</p>
                              <div className="pr-4">
                                <p className="text-muted mb-1 text-small">
                                  {order.descrition}
                                </p>
                              </div>
                              <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                                {order.createDate}
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx> */}
        </Row>
      </div>
    );
  }
}
