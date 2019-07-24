import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  NavLink,
  Badge,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { Colxx } from '../../components/CustomBootstrap';
import ReactSiema from '../../components/ReactSiema/ReactSiemaCarousel';
import { LineShadow } from '../../components/Charts';
import { lineChartConfig } from '../../config/chartConfig';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
          <Colxx lg="12" xl="6">
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ addProductModal: true })}
            >
              Add Product +
            </button>
          </Colxx>
        </Row>
        <Modal
          isOpen={this.state.addProductModal}
          toggle={() =>
            this.setState({ addProductModal: !this.state.addProductModal })
          }
        >
          <ModalBody>This is modal</ModalBody>
        </Modal>
      </div>
    );
  }
}
