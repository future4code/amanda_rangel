import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { createNewTrip } from "../../actions/trips";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo2 from "../../images/logo2.png"

const FormWrapper = styled.div`
 height: 100vh;
 width: 100vw;
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
  gap: 20px;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-top: 20px;
`;

const SelectPlanet = styled(Select)`
  width: 230px;
`

const TextFieldDate = styled(TextField)`
  width: 220px;  
`

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

  componentDidMount() {
    const token = window.localStorage.getItem("token");
 
   if (!token) {
     this.props.goToLogin();
   }
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
    alert("Viagem criada com sucesso!")
  };
  

  
  render() {
    const newDate = new Date().toISOString().split("T")[0];
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
        <TextFieldDate
          required
          name="date"
          label="Data"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min:newDate,
          }}
          value={this.state.date}
          onChange={this.onChangeDate}
          variant="outlined"
        />
          <label>Selecione o planeta de destino</label>
          <FormControl variant="outlined">
            <SelectPlanet
            native
            required
            name="planet"
            value={this.state.planet}
            onChange={this.onChangePlanet}
            input={
              <OutlinedInput
                name="planet"
              />
            }
            >
              <option value="">Planetas</option>
              <option value="Mercurio">Mercurio</option>
              <option value="Venus">Venus</option>
              <option value="Marte">Marte</option>
              <option value="Jupiter">Jupiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
            </SelectPlanet>
          </FormControl>
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
          <ButtonStyled type="submit">Enviar</ButtonStyled>
        </Form>
      </FormWrapper>
    );
  };
}


function mapDispatchToProps(dispatch) {
  return {
    createNewTrip: (name, planet, date, description, durationInDays) => dispatch(createNewTrip(name, planet, date, description, durationInDays)),
    goToLogin: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.home))
  }
};



export default connect(
  null,
  mapDispatchToProps
)(CreateTripsPage);
