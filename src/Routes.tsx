import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Home from "./containers/Home/Home";
import Context from "Context";
import { emptyProfile } from "sparow-api/dist/interfaces/profile";
const Component = () => {
  const context = useContext(Context);
  const [auth_status, set_auth_status] = useState<boolean>(false);
  context.authChanged.subscribe(() => {
    set_auth_status(context.user.id !== "test");
  });
  context.unauthorize = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth_token");
    localStorage.removeItem("expires_at");
    context.user = emptyProfile;
    context.authChanged.next();
  };
  useEffect(() => {
    context.sparow.profile$.subscribe((profile) => {
      context.user = profile;
    });
    const user_string = localStorage.getItem("user");
    const access_token = localStorage.getItem("auth_token");
    if (user_string && access_token) {
      const user = JSON.parse(user_string);
      context.user = user;
      context.sparow.setProfile(user, access_token);
      context.authChanged.next();
    }
  }, [context]);
  if (!auth_status) {
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
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
};

export default Component;
