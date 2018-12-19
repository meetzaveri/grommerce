import React, { Component } from 'react';
import { Form, Row, Col, Input } from 'antd';

const FormItem = Form.Item;

export default class AddProduct extends Component {
  state = {
    expand: false
  };
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
            </Col>
            <Col span="12">
              <FormItem label="Manufacturer" required="true">
                <Input
                  placeholder="Manufacturer's Name"
                  style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                />
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
