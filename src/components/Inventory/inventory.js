import React, { Fragment } from 'react';
import { Layout, Row, Col, Button, Input } from 'antd';
import TableComponent from './table';

const { Header, Footer, Content } = Layout;

const HeaderLayout = props => {
  console.log('props', props);
  return (
    <Fragment>
      <div className="inventory-tab-1 flex-box">Manage Items</div>
    </Fragment>
  );
};

const ContentLayout = props => {
  console.log('props', props);
  return (
    <Fragment>
      <Row>
        <Col span={8} className="ptbrl3 custom-col-content-layout">
          {' '}
          <Input size="large" placeholder="Search" />
        </Col>
        <Col span={8} offset={7} className="ptbrl3">
          <Button className="flr" type="primary" size="large">
            Add item
          </Button>
        </Col>
        <TableComponent />
      </Row>
    </Fragment>
  );
};

const MasterLayout = props => {
  console.log('props', props);
  return (
    <Fragment>
      <Layout>
        <Header>
          <div className="header">
            <HeaderLayout />
          </div>
        </Header>
        <Content>
          <div className="content">
            <ContentLayout />
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Fragment>
  );
};

const Inventory = () => {
  return (
    <Fragment>
      <div className="inventory">
        <h1>Inventory Page</h1>
        <MasterLayout />
      </div>
    </Fragment>
  );
};

export default Inventory;
