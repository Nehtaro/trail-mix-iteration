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

// state includes data retrieved from REI API, selects selected trail
// holds trail specific comments pulled from database

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/homepage" component={MainContainer} />
      </Switch>
    </Router>
  </div>
);

export default App;
