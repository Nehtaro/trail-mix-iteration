/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer.jsx";
import Login from "./login/Login.jsx";
import Signup from "./login/Signup.jsx";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/homepage" component={MainContainer} />
    </Switch>
  </Router>
);

export default App;
