import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './Pages/Dashboard/Dashboard';
import AllProducts from './Pages/Product/AllProducts';
import ProductInfo from './Pages/Product/ProductInfo';

import { routes } from './config/routes';
import AllCompanies from './Pages/Company/AllCompanies';

@inject('headerStore')
@observer
class MainApp extends Component {
  render() {
    return (
      <div id="app-container" className={this.props.headerStore.nextClasses}>
        <Header />
        <Sidebar />
        <main>
          <div className="container-fluid">
            {/* <Router> */}
            <Switch>
              <Route exact path={routes.index} component={Dashboard} />
              <Route exact path={routes.dashboard} component={Dashboard} />
              <Route exact path={routes.allProducts} component={AllProducts} />
              <Route
                exact
                path={routes.allCompanies}
                component={AllCompanies}
              />
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
