import { hot } from 'react-hot-loader';
import React, { Fragment } from 'react';
import Routes from 'config/routes';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';

import Dashboard from 'pages/Dashboard/Dashboard';

import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/sass/themes/gogo.light.blue.scss';
import '../assets/fonts/simple-line-icons/css/simple-line-icons.css';
import '../assets/fonts/iconsmind-s/css/iconsminds.css';
import { Provider } from 'mobx-react';
import headerStore from 'stores/header';

class App extends React.Component {
  render() {
    return (
      <Provider headerStore={headerStore}>
        {/* <Header /> */}
        <Switch>
          <Route exact path={Route.index} component={Dashboard} />
          <Route exact path={Routes.dashboard} component={Dashboard} />
        </Switch>
      </Provider>
    );
  }
}

export default hot(module)(App);
