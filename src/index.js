/** IE */
import 'core-js/es6/map'; // for IE old browsers
import 'core-js/es6/set'; // for IE old browsers
import 'raf/polyfill'; // for IE old browsers
import 'babel-polyfill'; // for IE old browsers

/** Modules */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './redux/rootReducers';
import rootSagas from './redux/rootSagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(rootSagas);

/** Render */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// ServiceWorker
serviceWorker.unregister();
