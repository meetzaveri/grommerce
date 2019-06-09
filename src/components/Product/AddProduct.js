import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_PRODUCT } from 'mutations';
const FormItem = Form.Item;

const { TextArea } = Input;

class AddProduct extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    expand: false
  };
  render() {
    return (
      <div>
        <Mutation mutation={ADD_PRODUCT}>
          {addProduct => (
            <Form
              className="ant-advanced-search-form"
              onSubmit={e => {
                e.preventDefault(),
                  addProduct({
                    variables: {
                      name: this.state.productName,
                      title: this.state.title,
                      category: this.state.category,
                      manufacturerId: this.state.manufacturerId,
                      expiryDate: this.state.expiryDate,
                      manufactureDate: this.state.manufactureDate,
                      description: this.state.description
                    }
                  });
              }}
            >
              <Row>
                <Col span="12">
                  <FormItem label="Name" required="true">
                    <Input
                      placeholder="Title"
                      style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                      onChange={e => this.setState({ title: e.target.value })}
                    />
                  </FormItem>
                  <FormItem label="Name" required="true">
                    <Input
                      placeholder="Product Name"
                      style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                      onChange={e =>
                        this.setState({ productName: e.target.value })
                      }
                    />
                  </FormItem>
                  <FormItem label="Category" required="true">
                    <Input
                      placeholder="Category"
                      style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                      onChange={e =>
                        this.setState({ category: e.target.value })
                      }
                    />
                  </FormItem>
                  <FormItem label="Manufacturer" required="true">
                    <Input
                      placeholder="Manufacturer's Name"
                      style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                      onChange={e =>
                        this.setState({ manufacturerId: e.target.value })
                      }
                    />
                  </FormItem>
                  <FormItem label="Manufacture Date" required="true">
                    <DatePicker
                      style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                      onChange={value =>
                        // this.setState({ manufactureDate: e.target.value })
                        console.log(value)
                      }
                    />
                  </FormItem>
                  <FormItem label="Expiry Date">
                    <DatePicker
                      placeholder="Enter the expiry date."
                      style={{ width: '60%', marginRight: 8, marginLeft: 20 }}
                      onChange={e =>
                        this.setState({ expiryDate: e.target.value })
                      }
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
                      onChange={e =>
                        this.setState({ description: e.target.value })
                      }
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
                  <button type="submit">Save</button>
                </Col>
              </Row>
            </Form>
          )}
        </Mutation>
      </div>
    );
  }
}
export default Form.create()(AddProduct);
