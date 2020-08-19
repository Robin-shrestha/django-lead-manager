import App from "./components/App";
import ReactDOM from "react-dom";
import React from "react";

import store from "./reducers";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
