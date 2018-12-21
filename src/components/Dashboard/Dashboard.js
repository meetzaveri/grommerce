import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import AddProduct from 'components/Product/AddProduct';
import Paragraph from 'styled/Paragraph';
import routes from 'config/routes';
import logo from '../../assets/grommerce-logo.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <a
            className="logo"
            onClick={() => this.props.history.push(routes.dashboard)}
          >
            <img src={logo} height="45" style={{paddingRight: '10px'}} />
            Grommerce
          </a>
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
                <Menu.Item
                  key="1"
                  onClick={() => this.props.history.push(routes.addProducts)}
                >
                  Add Products
                </Menu.Item>
                <Menu.Item key="2">View Products</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <div style={{ margin: '16px 0' }}>
              <Paragraph size="22px" margin="0" weight="bold">
                Add Products
              </Paragraph>
            </div>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              {(() => {
                switch (this.props.location.pathname) {
                  case '/dashboard/add-products':
                    return <AddProduct />;
                }
              })()}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
