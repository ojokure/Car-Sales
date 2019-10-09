import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import * as reducers from "./reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

const superReducer = combineReducers({
  stock: reducers.stockReducer
});

const store = createStore(superReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    ><App />
  </Provider>,
  rootElement
);
