import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, Register, Home, Start } from "../../pages";

export const Routes = () => {
  return (
    <Router>
      <Route exact path="/">
        <Start />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Router>
  );
};

export default Routes;
