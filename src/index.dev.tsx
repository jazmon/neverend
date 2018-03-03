import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import configureStore from 'redux/store/configureStore';

import DevTools from 'DevTools';
import { ConnectedRouter } from 'react-router-redux';
import styled from 'styled-components';
import {Logo} from 'components';
// const logo = require('./infinity.svg');
import {
  // BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';
import history from 'constants/history';
import App from './App';

const store = configureStore();

const Wrapper = styled.div`

`;

const TopBar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;

`;

// const Logo = styled.img`
//   height: 60px;
//   margin-left: 1em;
// `;

const Root = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Wrapper>
          <TopBar>
            <Logo />
          </TopBar>
          <div>
            <Route exact path="/" component={App} />
          </div>
          {process.env.REACT_APP_REDUX_DEVTOOLS_EXTENSION !== 'true' &&
            <DevTools />}
        </Wrapper>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>;

export default Root;
