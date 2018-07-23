import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import routes from './routers.js';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter >
            { routes }
        </HashRouter >
    </Provider>,
    document.getElementById('root')
)
