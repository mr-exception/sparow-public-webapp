import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Component";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Pay from "./containers/Pay/Pay";

const Component: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
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
