import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import { createNewTrip } from "../../actions/trips";
const Form = styled.form`
  width: 100%;
  height: 100vh;
  gap: 12px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const SelectStyled = styled(Select)`
  width: 20vw;
`

class CreateTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
    };
  }


  onChangeName = event => {
    this.setState({ name: event.target.value });
  };
  onChangeDurationInDays = event => {
    this.setState({ durationInDays: event.target.value });
  };
  onChangeDate= event => {
    this.setState({ date: event.target.value });
  };
  onChangePlanet = event => {
    this.setState({ planet: event.target.value });
  };
  onChangeDescription = event => {
    this.setState({ description: event.target.value });
  };
  
  onChangeTrip = event => {
    this.setState({ tripId: event.target.value });
  };

  handleOnSubmit = event => {
    const { name, planet, date, description, durationInDays } = this.state
    event.preventDefault();
    this.props.createNewTrip(name, planet, date, description, durationInDays);
  };
  

  
  render() {

    return (
      <Form onSubmit={this.handleOnSubmit}>
        <h2>Criar nova viagem</h2>
        <TextField
          required
          label="Nome da viagem"
          type="text"
          name="name"
          margin="normal"
          variant="outlined"
          inputProps={{ minlength:"5" }}
          value={this.state.name}
          onChange={this.onChangeName}
        />
       <TextField
          required
          label="Duração da viagem (dias)"
          type="number"
          name="durationInDays"
          margin="normal"
          variant="outlined"
          inputProps={{ 
            min:"50",
            pattern: "[0-9]+$" }}
          value={this.state.durationInDays}
          onChange={this.onChangeDurationInDays}  
        />
       <TextField
        required
        name="date"
        label="Data"
        type="date"
        InputLabelProps={{
          shrink: true,
          
        }}
        value={this.state.date}
        onChange={this.onChangeDate}
      />
        <label>Selecione o planeta de destino</label>
        <select
        required
        name="planet"
        value={this.state.planet}
        onChange={this.onChangePlanet}
        >
          <option value="">Planetas</option>
          <option value="Mercurio">Mercurio</option>
          <option value="Venus">Venus</option>
          <option value="Marte">Marte</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
        </select>
        <label>Descrição da viagem</label>
        <TextField
          required
          label="Descrição"
          name="description"
          multiline
          rows="6"
          margin="normal"
          variant="outlined"
          inputProps={{ 
            pattern: "[a-zA-Z\s\\.,]", minlength:"30" }}
          value={this.state.description}
          onChange={this.onChangeDescription} 
        />
        <Button type="submit">Enviar</Button>
      </Form>
    );
  };
}


function mapDispatchToProps(dispatch) {
  return {
    createNewTrip: (name, planet, date, description, durationInDays) => dispatch(createNewTrip(name, planet, date, description, durationInDays)),
  }
};



export default connect(
  null,
  mapDispatchToProps
)(CreateTripsPage);
