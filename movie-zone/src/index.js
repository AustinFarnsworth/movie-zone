import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "./reducers";
import {Provider} from "react-redux";

// STORE -> GLOBALIZED STATE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware()));

// ACTION INCREMENT

// REDUCER

// DISPLAY IT IN CONSOLE

// DISPATCH

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
