import { config } from 'dotenv';
import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import "./theme/styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import state from './state'
config();

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>
  , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
