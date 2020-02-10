import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/root/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "../src/redux/reducers/configureStore"
const store=configureStore();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
