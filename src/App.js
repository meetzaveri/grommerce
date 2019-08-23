import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';

import '../assets/css/vendor/bootstrap.min.css';
import '../assets/css/sass/themes/gogo.light.blue.scss';
import '../assets/fonts/simple-line-icons/css/simple-line-icons.css';
import '../assets/fonts/iconsmind-s/css/iconsminds.css';
import { Provider } from 'mobx-react';
import headerStore from './stores/header';
import productsStore from './stores/products';
import MainApp from './MainApp';

class App extends React.Component {
  render() {
    const stores = {
      headerStore: headerStore,
      productsStore: productsStore
    };
    return (
      <Provider {...stores}>
        <MainApp />
      </Provider>
    );
  }
}

export default hot(App);
