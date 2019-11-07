import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import {Countries} from "./Countries"
import { fetchTrips, postTripCandidate } from "../../actions/trips";
const Form = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class ApplicationFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      profession: "",
      country: "",
      applicationText: "",
      tripId: ""
    };
  }

  componentDidMount() {
    this.props.fetchTrips();
}


  onChangeName = event => {
    this.setState({ name: event.target.value });
  };
  onChangeAge = event => {
    this.setState({ age: event.target.value });
  };
  onChangeProfession = event => {
    this.setState({ profession: event.target.value });
  };
  onChangeCountry = event => {
    this.setState({ countrySelectValue: event.target.value });
  };
  onChangeApplicationText = event => {
    this.setState({ applicationText: event.target.value });
  };
  onChangeCountry = event => {
    this.setState({ country: event.target.value });
  };
  onChangeTrip = event => {
    this.setState({ tripId: event.target.value });
  };

  handleOnSubmit = event => {
    const { name, age, profession, country, applicationText, tripId } = this.state
    event.preventDefault();
    this.props.postTripCandidate(name, age, applicationText, profession, country, tripId);
  };
  

  
  render() {

    return (
      <Form onSubmit={this.handleOnSubmit}>
        <h2>Formulário de Inscrição</h2>
        <TextField
          required
          label="Nome"
          type="text"
          name="name"
          margin="normal"
          variant="outlined"
          inputProps={{ minlength:"3" }}
          value={this.state.name}
          onChange={this.onChangeName}
        />
       <TextField
          required
          label="Idade"
          type="number"
          name="age"
          margin="normal"
          variant="outlined"
          inputProps={{ 
            min:"18",
            pattern: "[0-9]+$" }}
          value={this.state.age}
          onChange={this.onChangeAge}  
        />
        <TextField
          required
          label="Profissão"
          type="text"
          name="profession"
          margin="normal"
          variant="outlined"
          inputProps={{ 
            minlength: "10" }}
          value={this.state.profession} 
          onChange={this.onChangeProfession}
        />
        <label>Selecione o país onde você mora</label>
        <select
        required
        name="country"
        value={this.state.country}
        onChange={this.onChangeCountry}
        >
          {Countries}
        </select>
        <label>Selecione a viagem desejada</label>
        <select
        name="tripId"
        id="tripId"
        value={this.state.tripId}
        onChange={this.onChangeTrip}
        >
          <option value="">Viagens</option>
          {this.props.trips.map(trip => {
              return <option value={trip.id}>{trip.name}</option>;
            })}
        </select>
        <label>Porque você é um bom candidato?</label>
        <TextField
          required
          label="Sobre"
          name="applicationText"
          multiline
          rows="6"
          margin="normal"
          variant="outlined"
          inputProps={{ 
            pattern: "[a-zA-Z\s\\.,]", minlength:"30" }}
          value={this.state.applicationText}
          onChange={this.onChangeApplicationText} 
        />
        <Button type="submit">Enviar</Button>
      </Form>
    );
  };
}

function mapStateToProps(state) {
  return {
    trips: state.trips.trips,
    tripId: state.trips.tripId
 };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: () => dispatch(fetchTrips()),
    postTripCandidate: (name, age, applicationText, profession, country, tripId) => dispatch(postTripCandidate(name,age, applicationText, profession, country, tripId))
 };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationFormPage);
