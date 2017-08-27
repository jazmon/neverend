import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import configureStore from 'redux/store/configureStore';

import DevTools from 'DevTools';
import { ConnectedRouter } from 'react-router-redux';
import {
  // BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';
import history from 'constants/history';
import App from './App';

const store = configureStore();

const Root = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div>
          <div>
            <Route exact path="/" component={App} />
          </div>
          <DevTools />
        </div>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>;

export default Root;
