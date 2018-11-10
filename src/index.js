import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './DevTools.js';
import store from './store';
import routes from './routes';
import {getCountries} from './actions/actions-countries.js';
import './country.css';

store.dispatch(getCountries());

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);