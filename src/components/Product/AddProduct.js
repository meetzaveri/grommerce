import React, { Component } from 'react';
import { Form, Row, Col, Input, DatePicker, Icon, Upload } from 'antd';
// import gql from 'graphql-tag';
// import { graphql } from 'react-apollo';

const FormItem = Form.Item;

const { TextArea } = Input;

// const addProduct = gql`
//   mutation addProduct($name: String!) {
//     addProduct(name: $name) {
//       _id
//     }
//   }
// `;


class AddProduct extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    expand: false
  };
  // submitForm = () => {
  //   this.props.addProduct({
  //     variables: {
  //       name: this.name.value
  //     }
  //   });
  // };
  render() {
    return (
      <div>
        <Form className="ant-advanced-search-form">
          <Row>
            <Col span="12">
              <FormItem label="Name" required="true">
                <Input
                  placeholder="Product Name"
                  style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                />
              </FormItem>
              <FormItem label="Manufacturer" required="true">
                <Input
                  placeholder="Manufacturer's Name"
                  style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                />
              </FormItem>
              <FormItem label="Manufacture Date" required="true">
                <DatePicker
                  style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                />
              </FormItem>
              <FormItem label="Expiry Date">
                <DatePicker
                  placeholder="Enter the expiry date."
                  style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                />
              </FormItem>
              <FormItem label="Description" required="true">
                <TextArea
                  style={{
                    width: '60%',
                    height: '100px',
                    maxHeight: '250px',
                    minHeight: '100px',
                    resize: 'none',
                    marginRight: 8,
                    marginLeft: 20
                  }}
                />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="Dragger" required>
                <div className="dropbox" style={{ paddingLeft: 20 }}>
                  <Upload.Dragger name="files">
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </div>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default Form.create()(AddProduct);
