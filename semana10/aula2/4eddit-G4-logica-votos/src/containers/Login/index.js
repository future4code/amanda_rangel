import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { loginAuth } from "../../actions/auth";
import { routes } from "../../containers/Router"
import astronaut_F4 from "../../img/astronaut_F4.png"

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  padding: 5px;
  margin-right: 40px;
`

const TypographyStyled = styled(Typography)`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`
const H2 = styled.h2`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
`

const AstronautImg = styled.img`
  width: 40px;
`

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled(Button)`
 width: 100px;
`

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (token) {
      this.props.goToFeedPage();
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };



  onClickLogin = () => {
    const { email, password } = this.state;

    this.props.doLogin(email, password);
  };


  render() {
    const { email, password } = this.state;

    return (

      <div>
        <AppBar position="static" color="primary">
          <ToolbarStyled>
            <Button>
              <AstronautImg 
              src={astronaut_F4}
              onClick={this.props.goToLoginPage}
              />
            </Button>
            <TypographyStyled >
              <H2>4eddit</H2>
              A rede do futuro
          </TypographyStyled>
          </ToolbarStyled>
        </AppBar>
        <FormStyled>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            variant="outlined"
          />

          <TextField
            required
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              onClick={this.onClickLogin}
              color="primary">
              <Typography color="textSecondary">Entrar</Typography>
            </ButtonStyled>
            <ButtonStyled
              variant="contained"
              onClick={this.props.goToSignUpPage}
              color="primary">
              <Typography color="textSecondary">Cadastrar</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToSignUpPage: () => dispatch(push(routes.signup)),
    doLogin: (email, password) => dispatch(loginAuth(email, password)),
    goToFeedPage: () => dispatch(push(routes.feed)),
    goToLoginPage: () => dispatch(push(routes.login)),
  };
}



export default connect(
  null,
  mapDispatchToProps
)(Login);


