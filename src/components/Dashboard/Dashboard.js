import React, { Component } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import AddProduct from '../Product/AddProduct';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <a className="logo">Grommerce</a>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['Products']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="Products">Products</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="shopping-cart" />
                    Products
                  </span>
                }
              >
                <Menu.Item key="1">Add Products</Menu.Item>
                <Menu.Item key="2">View Products</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <div style={{ margin: '16px 0' }}>
              <Button
                type="default"
                className="float-right"
                style={{ float: 'right' }}
                icon="plus"
              >
                Add Products
              </Button>
            </div>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <AddProduct />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
