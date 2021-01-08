import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.less";
import Home from "@/modules/Home";
import Login from "@/modules/Account/Login";
import Profile from "@/modules/Account/Profile";
import About from "@/modules/About";
import Dashboard from "@/modules/Dashboard";
import AppLayout from "@/modules/App/Layout";

export default () => {
  return (
    <Router>
      <AppLayout>
        <div className="App">
          <Switch>
            <Route key={"/"} exact path={"/"} component={Home} />
            <Route key={"/about"} exact path={"/about"} component={About} />
            <Route key={"/login"} exact path={"/login"} component={Login} />
            <Route
              key={"/profile"}
              exact
              path={"/profile"}
              component={Profile}
            />
            <Route
              key={"/dashboard"}
              exact
              path={"/dashboard"}
              component={Dashboard}
            />
          </Switch>
        </div>
      </AppLayout>
    </Router>
  );
};
