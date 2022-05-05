import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore} from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";

// STORE -> GLOBALIZED STATE
const store = createStore(allReducers);

// ACTION INCREMENT

// REDUCER

// DISPLAY IT IN CONSOLE

// DISPATCH

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
