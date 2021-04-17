import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
// containers
import Layout from "./containers/Layout/Layout";
import Sessions from "./containers/Sessions/Sessions";
import Main from "containers/Main/Main";
// extra imports
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IState } from "types/storeActions";
import { setSparow, storeUser } from "store/actions";
import Sparow from "api/Sparow";
import ProfileClass from "api/profile/Profile";
const Component: React.FC = () => {
  const loggedIn = useSelector((state: IState) => state.loggedIn, shallowEqual);
  const [finished_init, set_finished_init] = useState(false);
  const dispatch = useDispatch();

  // initialize auth informations
  useEffect(() => {
    // set sparow into store
    const sparow = new Sparow(
      "https://core.sparow.salimon.ir/api",
      "ws://salimon.ir:5003",
      "webapp"
    );
    dispatch(setSparow(sparow));
    // get user information from storage
    const user_string = localStorage.getItem("user");
    const access_token = localStorage.getItem("auth_token");
    if (user_string && access_token) {
      const user = JSON.parse(user_string) as IProfile;

      sparow.setProfile(new ProfileClass(user, sparow), access_token);

      localStorage.setItem("user", JSON.stringify(user));

      const profile = new ProfileClass(user, sparow);
      dispatch(storeUser(profile));
      set_finished_init(true);
    }
  }, []);

  if (!finished_init) {
    return <div>loading...</div>;
  }
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
          <Redirect to="/login" />
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
          <Route path="/sessions">
            <Layout
              location={[
                { name: "Home", route: "/home" },
                { name: "Sessions", route: "/sessions" },
              ]}
            >
              <Sessions />
            </Layout>
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    );
  }
};

export default Component;
