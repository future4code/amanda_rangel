import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { authenticateLogin } from "../../actions/auth"
import { routes } from "../Router"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo2 from "../../images/logo2.png"

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
`

const ErrorMessage = styled.p`
  color: red;
`;

const ToolbarStyled = styled(Toolbar)`
  background: #050A1B;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`
const Name = styled.img`
  height: 30px;
`
const LoginField = styled.div`
  width: 100%;
  height: 80vh;
  gap: 15px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const ButtonStyled = styled(Button)`
  &&  {
    background-color: #050A1B;
    width: 150px;
    color: white;
    height: 8vh;
  }  
  &&:hover {
    background: grey;
  }
`
const TextFieldStyled = styled(TextField)`
  && {
   
  }  
`
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
      <AppBar position="static">
        <ToolbarStyled>
          <Button onClick={this.props.goToHome}>
            <Name src={logo2} />
          </Button>
        </ToolbarStyled>
        </AppBar>
        <LoginField> 
          <TextFieldStyled
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            value={email}
            variant="outlined"
            label="Email"
          />
          <TextFieldStyled
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            value={password}
            variant="outlined"
            label="Senha"
          />
          <ButtonStyled 
          onClick={this.onClickLogin}
          variant="contained"
          >
            Login
          </ButtonStyled>
          <ErrorMessage>{errorMessage ? "Usuário ou Senha incorretos" : ""}</ErrorMessage>
        </LoginField> 
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
    authenticateLogin: (email, password) => dispatch(authenticateLogin(email, password)),
    goToHome: () => dispatch(push(routes.home)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);