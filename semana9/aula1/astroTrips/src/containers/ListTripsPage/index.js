import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styled from "styled-components";
import { fetchTrips, setSelectedTrip } from "../../actions/trips";
import { routes } from '../Router'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import logo2 from "../../images/logo2.png"

const ListWrapper = styled.form`
  color: #333;
  display: grid;
  justify-items: center;
  align-content: center;
  grid-gap: 20px;
`

const ToolbarStyled = styled(Toolbar)`
  background: #050A1B;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`

const Name = styled.img`
  height: 30px;
`

const ListStyled = styled(List)`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const ButtonStyled = styled(Button)`
  &&  {
    background-color: #050A1B;
    width: 100px;
    color: white;
    height: 5vh;
    margin-right: 20px;
  }
  &&:hover {
    background: grey;
  }
`
const ButtonNewStyled = styled(Button)`
  &&  {
    background-color: #050A1B;
    width: 250px;
    color: white;
    height: 5vh;
    margin-top: 20px;
  }
  &&:hover {
    background: grey;
  }
`


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

  onClickCreateNewTrip = () => {
    this.props.goToCreateTrips();
  }

  render() {

    return (
      <ListWrapper>
        <AppBar position="static">
          <ToolbarStyled>
            <Button onClick={this.props.goToHome}>
              <Name src={logo2} />
            </Button>
          </ToolbarStyled>
        </AppBar>
        {this.props.trips.map(trip => (
          <ListStyled>
            <ListItem>
              <h4>{trip.name}</h4>
            </ListItem>
            <ButtonStyled onClick={() => this.onClickDetails(trip.id)}>Detalhes</ButtonStyled>
          </ListStyled>
        ))}
          <ButtonNewStyled onClick={this.props.goToCreateTrips}>Criar nova viagem</ButtonNewStyled>
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
    goToLogin: () => dispatch(push(routes.login)),
    goToCreateTrips: () => dispatch(push(routes.createTrips)),
    goToHome: () => dispatch(push(routes.home))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTripsPage);