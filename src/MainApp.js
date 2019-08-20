import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import Header from './components/Header';

import Dashboard from './Pages/Dashboard/Dashboard';
import ProductInfo from './Pages/Product/ProductInfo';
import { routes } from './config/routes';

@inject('headerStore')
@observer
class MainApp extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        id="app-container"
        className="menu-default menu-sub-hidden main-hidden sub-hidden"
      >
        <Header />
        <main>
          <div className="container-fluid">
            {/* <Router> */}
            <Switch>
              <Route exact path={routes.index} component={Dashboard} />
              <Route exact path={routes.dashboard} component={Dashboard} />
              <Route exact path={routes.productInfo} component={ProductInfo} />

              <Redirect to={routes.index} />
            </Switch>
            {/* </Router> */}
          </div>
        </main>
      </div>
    );
  }
}

export default MainApp;
