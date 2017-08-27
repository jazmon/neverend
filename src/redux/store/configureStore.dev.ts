import { createStore, applyMiddleware, compose } from 'redux';
// import devTools from 'redux-devtools';
import { createLogger } from 'redux-logger';
// import { install as installLoop } from 'redux-loop';
// import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from 'redux/modules/index';
import DevTools from 'DevTools';
import {
  routerMiddleware,
} from 'react-router-redux';
import history from 'constants/history';

const loggerMiddleware = createLogger();

interface HotModule extends NodeModule {
  hot: {
    accept: (path: string, callback: () => void) => void;
  };
}

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk, routerMiddleware(history), loggerMiddleware),
  // autoRehydrate(),
  DevTools.instrument(),
);

const configureStore = (initialState: Object = {}) => {
  const store = createStore(rootReducer, initialState, enhancer);

  // begin periodically persisting the store
  // persistStore(store, {
  //   keyPrefix: 'PREFIX/PERSIST_STORE'
  // });

  if ((module as HotModule).hot) {
    (module as HotModule).hot.accept('../modules/index', () =>
      store.replaceReducer(require('../modules/index').default),
    );
  }

  return store;
};

export default configureStore;
