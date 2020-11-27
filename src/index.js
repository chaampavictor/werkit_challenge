import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { render } from "react-dom";
import React from "react";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
