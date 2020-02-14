import React, { useState }from "react";
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {login} from "../../actions/auth";
import { connect } from "react-redux";
import futureTube2 from "../../img/futureTube2.png";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const PageTop = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const Logo = styled.img`
  width: 40%;
  height: 20%;
`;

const TitleText = styled.p`
    width: 100%;
    font-family: Roboto,serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #f57f20;
`;

const LoginForm = styled.form`
    display: grid;
    justify-items: center;
    grid-gap: 15px;
    margin-bottom: 28px;
`;

const EmailTextField = styled(TextField)`
    width: 300px;
    height: 56px;
    border-radius: 2px;
`;

const PasswordTextField = styled(TextField)`
    margin-top: 16px;
    margin-bottom: 16px;
    width: 300px;
    height: 56px;
    border-radius: 2px;
`;

const LoginButton = styled(Button)`
    width: 300px;
    height: 42px;
    border-radius: 2px;
    && {
    background-color: #f57f20;
    color: white;
    }
`;

const RegisterText = styled.p`
    margin-top: 0;
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    text-align: center;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const ClickText = styled.p`
    font-family: Roboto,serif;
    font-size: 16px;
    color: #f57f20;
`;

const ErrorMessage = styled.p`
    margin-top: 0;
    margin-bottom: 15px;
    width: 296px;
    font-family: Roboto,serif;
    font-size: 16px;
    text-align: center;
    color: red;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onChange = event => {
    event.target.name === "email"?
      setEmail(event.target.value) :
      setPassword(event.target.value);
  };
  const onClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const onSubmit = event => {
    event.preventDefault();
    props.authenticateLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return(
    <MainContainer>
      <PageTop>
        <Logo src={futureTube2}/>
        <TitleText>
           Login
        </TitleText>
      </PageTop>
      <LoginForm onSubmit={onSubmit}>
        <EmailTextField
          id="outlined-email"
          label="E-mail"
          value={email}
          onChange={onChange}
          required={true}
          margin="normal"
          variant="outlined"
          type="email"
          name="email"
          placeholder="email@email.com"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <PasswordTextField
          id="password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          label="Senha"
          name="password"
          placeholder="Mínimo 6 caracteres"
          value={password}
          minlenght="6"
          required={true}
          onChange={onChange}
          InputLabelProps={{
            shrink: true,
          }}
          erorText="Mínimo de 6 caracteres!"
          InputProps={{
            minlenght:"6",
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={onClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <ErrorMessage>
          {props.errorMessage ? "Usuário ou Senha incorretos" : ""}
        </ErrorMessage>
        <LoginButton type="submit" color="primary">Entrar</LoginButton>
      </LoginForm>
      <RegisterText>Não possui cadastro?
        <ClickText> Clique aqui.</ClickText>
      </RegisterText>
    </MainContainer>
  )
};

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticateLogin: (email, password) => dispatch(login(email, password)),
    // goToHome: () => dispatch(push(routes.home)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);