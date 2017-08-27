import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import RootProd from 'index.prod';
import RootDev from 'index.dev';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Root =
process.env.NODE_ENV !== 'development'
  ? RootProd
  : RootDev;

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);

registerServiceWorker();
