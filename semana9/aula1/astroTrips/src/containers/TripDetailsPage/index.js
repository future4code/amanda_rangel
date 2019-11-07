import React, { Component } from "react";
import { routes } from "../Router"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import styled from "styled-components";
import { getTripDetails } from "../../actions/trips";
import { ListItem } from "@material-ui/core";

const TripDetailsWrapper = styled.div`
 display: flex;
`;

const ListStyled = styled(List)`
`
class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    
  }

 componentDidMount() {
   this.props.getTripDetails(this.props.tripId);
   const token = window.localStorage.getItem("token");
 
   if (!token) {
     this.props.goToLogin();
  }
 }

  render() {
    const tripId = this.props.tripId;
    return (
      <TripDetailsWrapper>
        <h3>Viagens</h3>
        <ListStyled>
          <ListItem>
            Nome: {tripId.name}
          </ListItem>
          <ListItem>
            Planeta: {tripId.planet}
          </ListItem>
          <ListItem>
            Duração: {tripId.durationInDays}
          </ListItem>
          <ListItem>
            Descrição: {tripId.description}
          </ListItem>
        </ListStyled> 
        <h3>Candidatos</h3>
        {tripId.candidates !== undefined &&
          tripId.candidates.map(candidate => (
            <ListStyled>
              <ListItem>
                Nome: {candidate.name}
              </ListItem>
              <ListItem>
                País: {candidate.country}
              </ListItem>
              <ListItem>
                Texto: {candidate.applicationText}
              </ListItem>
              <ListItem>
                Profissão: {candidate.profession}
              </ListItem>
              <ListItem>
                Idade: {candidate.age}
              </ListItem>
              </ListStyled>
          ))}   
      </TripDetailsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  tripId: state.trips.tripId
});


function mapDispatchToProps(dispatch) {
  return {
    getTripDetails: (tripId) => dispatch(getTripDetails(tripId)),
    goToLogin: () => dispatch(push(routes.login))
 };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDetailsPage);
