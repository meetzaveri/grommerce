import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  imageUrl: Yup.string().required(),
  description: Yup.string().required(),
  manufactureDate: Yup.date().required(),
  expireDate: Yup.date().required(),
  mrp: Yup.number()
    .positive()
    .required(),
  discountPrice: Yup.number()
    .positive()
    .required(),
  variants: Yup.string().required(),
  quantity: Yup.number().required()
});

class AddProductModal extends PureComponent {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggle}
        wrapClassName="modal-right"
      >
        <ModalHeader
          className="d-flex align-items-center py-0"
          toggle={this.props.toggle}
        >
          <h3>Add a Product</h3>
        </ModalHeader>
        <ModalBody>
          <Formik
            validationSchema={validationSchema}
            render={() => {
              return (
                <>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter Title of the Product"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="imageUrl">Image URL</Label>
                    <Input
                      name="quantity"
                      type="number"
                      placeholder="Enter Image URL of the Product"
                      min="0"
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
                </>
              );
            }}
          />
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <button className="btn default" onClick={this.props.toggle}>
            Cancel
          </button>
          <button className="btn btn-primary">Add Product</button>
        </ModalFooter>
      </Modal>
    );
  }
}

AddProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default AddProductModal;
