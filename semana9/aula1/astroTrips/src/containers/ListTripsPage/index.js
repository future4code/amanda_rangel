import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styled from "styled-components";
import { fetchTrips, setSelectedTrip } from "../../actions/trips";
import {routes} from '../Router'

const ListWrapper = styled.form`
 
`;

class ListTripsPage extends Component {

  componentDidMount() {
    this.props.fetchTrips();
    const token = window.localStorage.getItem("token");

    if (!token) {
      this.props.goToLogin();
    }
  }

  onClickDetails = (tripId) => {
    this.props.setSelectedTrip(tripId);
    this.props.goToTripDetails();
  }

  render() {
    
    return (
      <ListWrapper>
        {this.props.trips.map(trip => (
          <List>
            <ListItem>{trip.name}</ListItem>
            <Button onClick={ () => this.onClickDetails(trip.id)}>Detalhes</Button>
          </List>
        ))}
      </ListWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    trips: state.trips.trips
 };
  
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
    goToTripDetails: () => dispatch(push(routes.tripsDetails)),
    setSelectedTrip: (tripId) => dispatch(setSelectedTrip(tripId)),
    goToLogin: () => dispatch(push(routes.login))
 };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTripsPage);