import React from 'react';
import ReactDOM from 'react-dom';
import './scss';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
class HelloMessage extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <div className="logo">Grommerce</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Something awesome is in progress
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Grommerce ©2018</Footer>
      </Layout>
    );
  }
}

let App = document.getElementById('root');

ReactDOM.render(<HelloMessage />, App);
