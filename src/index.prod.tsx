import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import history from 'constants/history';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from 'redux/store/configureStore';
import App from './App';
import {
  // BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';

const store = configureStore();

const Root = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>;

export default Root;
