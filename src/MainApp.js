import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Routes from 'config/routes';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';

import Dashboard from 'pages/Dashboard/Dashboard';

@inject('headerStore')
@observer
class MainApp extends Component {
  render() {
    const { headerStore } = this.props;

    console.log('main app', this.props);

    return (
      <div
        id="app-container"
        className="menu-default menu-sub-hidden main-hidden sub-hidden"
      >
        <Header />
        <main>
          <div className="container-fluid">
            <Switch>
              <Route exact path={Route.index} component={Dashboard} />
              <Route exact path={Routes.dashboard} component={Dashboard} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default MainApp;
