import { createStore, applyMiddleware } from 'redux';
import reducers from './index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
if (module.hot) {
  module.hot.accept('./index', () =>
    store.replaceReducer(require('./index').default)
  );
}

export default store;
