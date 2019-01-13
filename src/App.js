import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import 'scss/index.scss';
import LoginSignup from 'components/LoginSignup/LoginSignup';
import Routes from 'config/routes';
import InventoryPage from 'containers/Inventory';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'components/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path={Routes.login} component={LoginSignup} />
          <Route exact path={Routes.inventory} component={InventoryPage} />
          <Route exact path={Routes.dashboard} component={Dashboard} />
          <Route exact path={Routes.addProducts} component={Dashboard} />
          <Route exact path={Routes.viewProducts} component={Dashboard} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
