import React from "react";
import ReactDOM from "react-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

// pages
import Home from "Home";

// others
import {Provider} from "react-redux";
import {store} from "./redux/store"

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
