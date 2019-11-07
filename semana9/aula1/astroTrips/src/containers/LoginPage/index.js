import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { authenticateLogin } from "../../actions/auth"
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

const ErrorMessage = styled.p`
  color: red;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickLogin = () => {
    const { email, password } = this.state;

    this.props.authenticateLogin(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props;

    return (
      <LoginWrapper>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button onClick={this.onClickLogin}>Login</Button>
        <ErrorMessage>{errorMessage ? "Usuário ou Senha incorretos" : ""}</ErrorMessage>
      </LoginWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    errorMessage: state.auth.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateLogin: (email, password) => dispatch(authenticateLogin(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);