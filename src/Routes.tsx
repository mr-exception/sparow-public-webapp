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
import Dashboard from "./containers/Dashboard/Layout";
import Profile from './containers/Dashboard/Profile';
import Main from './containers/Dashboard/Main';

const Component:React.FC = () => {
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
        <Route path="/dashboard">
          <Dashboard>
            <Main/>
          </Dashboard>
        </Route>
        <Route path="/profile">
          <Dashboard>
            <Profile/>
          </Dashboard>
        </Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default Component;
