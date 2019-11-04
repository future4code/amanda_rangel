import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { fetchTrips } from "../../actions/trips";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class ListTripsPage extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    
    return (
      <LoginWrapper>
         <Button onClick={this.props.fetchTrips}>Viagens marcadas</Button>
         <ul>
           
         </ul>
      </LoginWrapper>
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
    fetchTrips: () => dispatch(fetchTrips())
  };
  
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTripsPage);