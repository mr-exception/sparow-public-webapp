import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Layout from "./containers/Layout/Layout";
import Profile from "./containers/Layout/Profile";
import Context from "Context";
import { emptyProfile } from "api/interfaces/profile";
import Main from "containers/Main/Main";
import { shallowEqual, useSelector } from "react-redux";
import { IAuthState } from "types/storeActions";
const Component: React.FC = () => {
  const context = useContext(Context);

  const loggedIn = useSelector(
    (state: IAuthState) => state.loggedIn,
    shallowEqual
  );

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

  if (!loggedIn) {
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
            <Layout location={[{ name: "Home", route: "/home" }]}>
              <Main />
            </Layout>
          </Route>
          <Route path="/profile">
            <Layout location={[{ name: "Profile", route: "/profile" }]}>
              <Profile />
            </Layout>
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
};

export default Component;
