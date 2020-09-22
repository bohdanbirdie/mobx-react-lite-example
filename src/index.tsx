import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import { StoresProvider, stores } from "./stores";

const rootElement = document.getElementById("root");
render(
  <StoresProvider value={stores}>
    <App />
  </StoresProvider>,
  rootElement
);
