import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { loginAuthSignUp } from "../../actions/posts"
import astronaut_F4 from "../../img/astronaut_F4.png"


const PageWrapper = styled.div``

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin-top: 60px;
`
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

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
    }
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleOnSubmit = event => {
    const { email, password, username } = this.state
    event.preventDefault();
    this.props.createNewUser(email, password, username);
  };

  onClickSignUp= () => {
    const { username, email, password } = this.state;
    this.props.createNewUser(username, email, password);
  };

  
  render() {
    return (
      <PageWrapper>
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
        <Form onSubmit={this.handleOnSubmit}>
          <TextField
            required
            id="outlined-name"
            type="text"
            label="Nome"
            value={this.state.username}
            onChange={this.handleNameChange}
            margin="normal"
            variant="outlined"
            name="username"
          />
          <TextField
            required
            id="outlined-name"
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            margin="normal"
            variant="outlined"
            name="email"
          />
          <TextField
            required
            id="outlined-name"
            type="password"
            label="Senha"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            margin="normal"
            variant="outlined"
            name="password"
          />
        <Button 
          type="submit" 
          onClick={this.onClickSignUp}
          variant="contained"
          color="primary"
          >
          <Typography color="textSecondary">
            Enviar
          </Typography>
        </Button>
      </Form>

      
      </PageWrapper>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {
    createNewUser: (email, password, username) => dispatch(loginAuthSignUp(email, password, username)),
    goToLoginPage: () => dispatch(push(routes.login)),
   }
 };

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
    