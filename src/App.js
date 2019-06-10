import React, { Fragment } from 'react';
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
          <Route exact path={Routes.dashboard} component={Dashboard} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
