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
import AllProducts from './Pages/Product/AllProducts';
import { routes } from './config/routes';

@inject('headerStore')
@observer
class MainApp extends Component {
  render() {
    return (
      <div id="app-container" className="menu-default sub-hidden">
        <Header />
        <main>
          <div className="container-fluid">
            {/* <Router> */}
            <Switch>
              <Route exact path={routes.index} component={Dashboard} />
              <Route exact path={routes.dashboard} component={Dashboard} />
              <Route exact path={routes.allProducts} component={AllProducts} />

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
