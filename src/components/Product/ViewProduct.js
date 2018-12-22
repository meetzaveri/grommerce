import React, { Component } from 'react';
import { Card, Icon, Avatar, Row, Col } from 'antd';

const { Meta } = Card;

class ViewProduct extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    expand: false
  };
  render() {
    return (
      <div>
        <Row gutter={350}>
          <Col span={3} offset={1}>
            <Card
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={3}>
            <Card
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={3}>
            <Card
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <Row gutter={350}>
          <Col span={3} offset={1}>
            <Card
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={3}>
            <Card
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={3}>
            <Card
              style={{ width: 250 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Icon type="setting" />,
                <Icon type="edit" />,
                <Icon type="ellipsis" />
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ViewProduct;
