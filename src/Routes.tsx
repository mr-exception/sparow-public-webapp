import React, { useEffect } from "react";
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
import Main from "containers/Main/Main";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IAction, IState } from "types/storeActions";
import { setSparow, storeUser } from "store/actions";
import Sparow from "api/Sparow";
import ProfileClass from "api/profile/Profile";
import { IProfile } from "api/profile/profile";
const Component: React.FC = () => {
  const loggedIn = useSelector((state: IState) => state.loggedIn, shallowEqual);
  const dispatch = useDispatch();

  // initialize auth informations
  useEffect(() => {
    // set sparow into store
    const sparow = new Sparow(
      "https://core.sparow.salimon.ir/api",
      "ws://salimon.ir:5003",
      "webapp"
    );
    dispatch<IAction>(setSparow(sparow));
    // get user information from storage
    const user_string = localStorage.getItem("user");
    const access_token = localStorage.getItem("auth_token");
    if (user_string && access_token) {
      const user = JSON.parse(user_string) as IProfile;

      localStorage.setItem("user", JSON.stringify(user));

      const profile = new ProfileClass(user, sparow);
      dispatch<IAction>(storeUser(profile));
    }
  }, []);

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
            <Layout
              location={[
                { name: "Home", route: "/home" },
                { name: "Profile", route: "/profile" },
              ]}
            >
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
