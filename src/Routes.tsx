import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Sparow from "sparow-api";
import Context from "Context";

const Component = () => {
  const context = useContext(Context);
  context.sparow = new Sparow({base_url: "http://localhost:5000"});
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/reset-password/:token">
          <ResetPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default Component;
