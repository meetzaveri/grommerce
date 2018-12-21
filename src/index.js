import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'scss/index.scss';
import LoginSignup from 'components/LoginSignup/LoginSignup';
import Routes from 'config/routes';
import InventoryPage from 'containers/Inventory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from 'components/Dashboard/Dashboard';
import AddProduct from 'components/Product/AddProduct';

class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path={Routes.login} component={LoginSignup} />
            <Route exact path={Routes.inventory} component={InventoryPage} />
            <Route exact path={Routes.dashboard} component={Dashboard} />
            <Route exact path={Routes.addProducts} component={Dashboard} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

let App = document.getElementById('root');

ReactDOM.render(<Main />, App);
