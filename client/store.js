/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/combinedReducers';
// import { loadMarkets } from './actions/actions'; edit later

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

// store.dispatch(loadMarkets()); edit later

export default store;
