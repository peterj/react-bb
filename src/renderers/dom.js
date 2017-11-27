import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

// import "./index.css";
import App from "../components/App";

import configStore from "../store/configStore";

const store = configStore();

// compare it with existing content and re-hydrate it
ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
