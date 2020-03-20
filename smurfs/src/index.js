import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
