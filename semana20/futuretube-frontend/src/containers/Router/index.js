import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom"
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import FeedPage from "../FeedPage";

export const routes = {
  login: "/login",
  signUp: "/signUp",
  feed: "/"

};
function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.feed} component={FeedPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;