import React from 'react';
import ReactDOM from 'react-dom';
import './scss';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
import Login from './components/login';
import Routes from './config/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class HelloMessage extends React.Component {
  onclick = () => {
    console.log('gere');
  };
  render() {
    return (
      <Router>
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
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route exact path="/" component={'This is home'} />
              <Route path={Routes.login} component={Login} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Grommerce ©2018</Footer>
        </Layout>
      </Router>
    );
  }
}

let App = document.getElementById('root');

ReactDOM.render(<HelloMessage />, App);
