import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripsPage from "../CreateTripsPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";
import ApplicationFormPage from "../ApplicationFormPage";
import HomePage from "../HomePage";

export const routes = {
  home: "/",
  applicationForm: "/application-form",
  login: "/login",
  createTrips: "/trips/create",
  tripsList: "/trips/list",
  tripsDetails: "/trips/details",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.applicationForm} component={ApplicationFormPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.createTrips} component={CreateTripsPage} />
        <Route exact path={routes.tripsList} component={ListTripsPage} />
        <Route exact path={routes.tripsDetails} component={TripDetailsPage} />
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
