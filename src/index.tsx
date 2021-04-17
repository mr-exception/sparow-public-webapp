import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import Store from "./store/store";
import { Provider } from "react-redux";
import "index.scss";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
