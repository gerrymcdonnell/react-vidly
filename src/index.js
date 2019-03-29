import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import bootstrap v4
import "bootstrap/dist/css/bootstrap.css";
//font awesome
import "font-awesome/css/font-awesome.css";

//vid 94 type first letter of import i.e rrd then tab
import { BrowserRouter } from 'react-router-dom';

//test env variables
console.log('ev file',process.env.REACT_APP_NAME);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
