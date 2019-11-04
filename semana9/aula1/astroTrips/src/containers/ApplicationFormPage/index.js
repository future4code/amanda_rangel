import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const LoginWrapper = styled.form`
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
      <LoginWrapper>
        <h2>Formulário de Inscrição</h2>
        <TextField
          variant='outlined'
          onChange={this.handleFieldChange}
          name="name"
          type="name"
          label="Nome Completo"
          value={name}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="age"
          type="age"
          label="Idade"
          variant='outlined'
          value={age}
        />
        <Button>Enviar</Button>
      </LoginWrapper>
    );
  }
}

export default ApplicationFormPage;
