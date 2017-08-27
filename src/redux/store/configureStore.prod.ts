import { createStore, applyMiddleware } from 'redux';
// import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from 'redux/modules/index';

// Middleware you want to use in production:
const enhancer = composeWithDevTools(
  applyMiddleware(thunk),
  // autoRehydrate()
);

const configureStore = (initialState?: Object) => {
  const store = createStore(rootReducer, initialState, enhancer);
  // begin periodically persisting the store
  // persistStore(store);

  return store;
};

// export default configureStore;
export default configureStore;