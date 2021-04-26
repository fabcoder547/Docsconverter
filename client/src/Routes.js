import React from "react";

import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import App from "./App";

import Screen from "./Screen";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route
          path="/convert/:first/:second/:method"
          exact
          component={Screen}
        />
      </Switch>
    </Router>
  );
}
