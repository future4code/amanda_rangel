import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import {Countries} from "./Countries"
import { fetchTrips, postTripCandidate } from "../../actions/trips";
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo2 from "../../images/logo2.png"

const FormWrapper = styled.div`
 height: 100vh;
 width: 100vw;
 color: #333;
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
const Form = styled.form`
  width: 100%;
  height: 100vh;
  gap: 12px;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-top: 20px;
`;
const ButtonStyled = styled(Button)`
  &&  {
    background-color: #050A1B;
    width: 100px;
    color: white;
    height: 6vh;
    margin-bottom: 20px;
  }  
  &&:hover {
    background: grey;
  }
`

const SelectCountry = styled(Select)`
  width: 230px;
`
const SelectTrips = styled(Select)`
  width: 230px;
`

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
    alert("Cadastro realizado com sucesso!")
  };

  

  
  render() {

    return (
      <FormWrapper>
        <AppBar position="static">
          <ToolbarStyled>
            <Button onClick={this.props.goToHome}>
              <Name src={logo2} />
            </Button>
          </ToolbarStyled>
        </AppBar>
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
          
            <SelectCountry
              native
              required
              name="country"
              value={this.state.country}
              onChange={this.onChangeCountry}
              input={
                <OutlinedInput
                  name="country"
                />
              }
              >
              {Countries}
            </SelectCountry>
          <label>Selecione a viagem desejada</label>
          <FormControl variant="outlined">
            <SelectTrips
              native
              required          
              name="tripId"
              id="tripId"
              value={this.state.tripId}
              onChange={this.onChangeTrip}
              input={
                <OutlinedInput
                  name="tripId"
                />
              }
              >
              <option value = "">Viagens</option>
              {this.props.trips.map(trip => {
                return <option value={trip.id}>{trip.name}</option>
              })}
            </SelectTrips>
          </FormControl>
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
          <ButtonStyled type="submit">Enviar</ButtonStyled>
        </Form>
      </FormWrapper>
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
    postTripCandidate: (name, age, applicationText, profession, country, tripId) => dispatch(postTripCandidate(name,age, applicationText, profession, country, tripId)),
    goToHome: () => dispatch(push(routes.home))
 };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationFormPage);
