import React, { Fragment } from 'react';
import 'scss/index.scss';
import Routes from 'config/routes';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'components/Dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path={Route.index} component={Dashboard} />
          <Route exact path={Routes.dashboard} component={Dashboard} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
