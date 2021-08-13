// This is for the fake API. Do not delete!
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
//import styling
import { ThemeProvider } from 'styled-components';
import theme from './theme'
import "./index.css";

import { worker } from "./mocks/browser";
worker.start();



ReactDOM.render(
<ThemeProvider theme={theme} >
    <App />
  </ThemeProvider>,
   document.getElementById("root"));
