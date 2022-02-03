import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// styles libraries
import 'normalize.css';
import 'bulma/css/bulma.min.css';
import './styles/styles.css';

// components
import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore";

const store = configureStore();

console.log(store.getState());

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
