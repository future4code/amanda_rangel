import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Countries} from "./Countries"

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

class ApplicationFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, age } = this.state;

    return (
      <Form>
        <h2>Formulário de Inscrição</h2>
        <TextField
          label="Nome"
          type="text"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
        />
       <TextField
          label="Idade"
          type="number"
          name=""
          autoComplete="idade"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Profissão"
          type="text"
          name=""
          autoComplete="profissão"
          margin="normal"
          variant="outlined"
        />
        <label>Selecione o país onde você mora</label>
        <SelectStyled>
          {Countries}
        </SelectStyled>
        <label>Porque você é um bom candidato?</label>
        <TextField
          label="Multiline"
          multiline
          rows="6"
          margin="normal"
          variant="outlined"
      />
        <Button>Enviar</Button>
      </Form>
    );
  }
}

export default ApplicationFormPage;
