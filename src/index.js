import React from "react";
import ReactDOM from "react-dom";

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
