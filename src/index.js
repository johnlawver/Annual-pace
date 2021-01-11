import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  rootElement
);
