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
import { LineShadow } from '../../components/Charts';
import { lineChartConfig } from '../../config/chartConfig';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { products } from '../../Data/products';

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
          <Colxx lg="12" xl="5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recent Orders</h5>
                <div className="scroll dashboard-list-with-thumbs">
                  <PerfectScrollbar>
                    {products.map((product, index) => {
                      return (
                        <div className="d-flex mb-3">
                          <a>
                            <img src={`../../${product.img}`} alt="" />
                            <Badge pill>{product.status}</Badge>
                          </a>
                          <div className="pl-3 pr-2 pt-2 pb-2">
                            <a>
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
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </div>
            </div>
          </Colxx>
          <Colxx lg="1" xl="1">
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ addProductModal: true })}
            >
              Add Product
            </button>
          </Colxx>
        </Row>
        <Modal
          isOpen={this.state.addProductModal}
          toggle={() =>
            this.setState({ addProductModal: !this.state.addProductModal })
          }
          wrapClassName="modal-right"
        >
          <ModalHeader className="d-flex align-items-center">
            Add a Product
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  placeholder="Enter Title of the Product"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  name="description"
                  type="textarea"
                  placeholder="Enter Description of the Product"
                />
              </FormGroup>
              <FormGroup>
                <Label for="manufactureDate">Manufacture Date</Label>
                <Input name="manufactureDate" type="date" />
              </FormGroup>
              <FormGroup>
                <Label for="expireDate">Expire Date</Label>
                <Input name="expireDate" type="date" />
              </FormGroup>
              <FormGroup>
                <Label for="mrp">Maximum Retail Price (MRP)</Label>
                <Input
                  name="mrp"
                  type="number"
                  placeholder="Enter MRP of Product"
                  min="0"
                />
              </FormGroup>
              <FormGroup>
                <Label for="discountPercentage">Discount Percentage</Label>
                <Input
                  name="discountPercentage"
                  type="number"
                  placeholder="Enter Discount Percentage (%) of Product"
                  min="0"
                />
              </FormGroup>
              <FormGroup>
                <Label for="discountPrice">Discounted Price</Label>
                <Input
                  name="discountPrice"
                  type="number"
                  placeholder="Enter Discounted Price of Product"
                  min="0"
                />
              </FormGroup>
              <FormGroup>
                <Label for="variants">Variants</Label>
                <Input name="variants" type="select" placeholder="">
                  <option value="" disabled className="text-muted">
                    Enter Discounted Price of Product
                  </option>
                  <option value="g">Grams (g)</option>
                  <option value="kg">Kilograms (kg)</option>
                  <option value="ltr">Litres (ltr)</option>
                  <option value="ml">Millilitres (ml)</option>
                  <option value="s">Small (s)</option>
                  <option value="m">Medium (m)</option>
                  <option value="l">Large (l)</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="quantity">Quantity</Label>
                <Input
                  name="quantity"
                  type="number"
                  placeholder="Enter Quantity of Product in numbers"
                  min="0"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-between">
            <button
              className="btn default"
              onClick={() =>
                this.setState({ addProductModal: !this.state.addProductModal })
              }
            >
              Cancel
            </button>
            <button className="btn btn-primary">Add Product</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
