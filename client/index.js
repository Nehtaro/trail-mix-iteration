/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */
import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

//uses ReactRouter to route the paths for login, signup, and homepage
render (
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("content")
);
