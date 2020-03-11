import React, {useState} from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router"
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import futureTube2 from "../../img/futureTube2.png"
import Avatar from "@material-ui/core/Avatar";
import {signUp} from "../../actions/auth"
import * as firebase from 'firebase/app'
import {PhotoCamera} from "@material-ui/icons";

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const PageTop = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 40%;
  height: 20%;
`;

const TextTitle = styled.div`
    width: 100%;
    font-family: Roboto,serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const FormContainer= styled.form`
    display: grid;
    justify-items: center;
    grid-gap: 15px;
    margin-bottom: 28px;
`;

const StyledTextField= styled(TextField)`
  display: grid; 
  width: 75vw;
`;

const LoadPicture = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
`;

const PhotoCam = styled(IconButton)`
    width: 50px;
    height: 52px;  
    margin-bottom: 5px;  
`;

const PictureInput = styled.input`
  display: none;
`;

const PhotoCameraIcon = styled(PhotoCamera)`
    && {
    width: 52px;
    height: 55px;  
    margin-bottom: 6px; 
`;

const ChoosePicButton= styled(Button)`
    height: 70px;
    border-radius: 2px;
        && {
    background-color: darkgrey;
    color: white;
    margin-top: 30px;  
    }    
      
    @media (min-width: 300px) and (max-width: 500px) {
      width: 40vw;
    }
    @media (min-width: 500px) and (max-width: 1440px) {
      width: 40vw;
    }
`;

const SubmitButton= styled(Button)`
    width: 75vw;
    height: 42px;
    border-radius: 2px;
        && {
    background-color: #f57f20;
    color: white;
    }
    margin-top: 16px;
`;

const ImgInputPicture = styled.div`
  border: lightgray dashed;  
  padding: 10px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PicText = styled.p`
  color: #333;
  font-weight: bold;
  text-align: center;
`;

  const SignUpPage = (props) => {


  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onClickShowPassword = () => setShowPassword(!showPassword);

  const onClickShowPasswordConfirmation = () => setShowPasswordConfirmation(!showPasswordConfirmation);

  const onChangeName = (event) => setName(event.target.value);

  const onChangeDateOfBirth= (event) => setDateOfBirth(event.target.value);

  const onChangeEmail = (event) => setEmail(event.target.value);

  const onChangePassword = (event) => setPassword(event.target.value);

  const onChangePasswordConfirmation = (event) => setPasswordConfirmation(event.target.value);

  const fileInput = React.createRef();

  const UploadFile = async () => {
    const storageRef = firebase.storage().ref();
    const newFileRef = storageRef.child(fileInput.current.files[0].name);
    const uploadResult = await newFileRef.put(fileInput.current.files[0]).catch(e => console.log('ERRO NO UPLOAD', e));
    return await uploadResult.ref.getDownloadURL()
    };

  const onClickUpload = async event => {
      const createdFileUrl = await UploadFile();
      setPicture(createdFileUrl);
    };

  const onSubmit = async event=> {
    event.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
    setDateOfBirth('');

    props.signUp(name, email, dateOfBirth, picture, password);
  };

    return (
      <MainContainer>
        <PageTop>
          <Logo src={futureTube2}/>
          <TextTitle> Cadastre-se </TextTitle>
        </PageTop>
        <FormContainer autoComplete="off" onSubmit={onSubmit}>
          <StyledTextField
            required
            label="Nome"
            placeholder="Nome e Sobrenome"
            variant="outlined"
            name="name"
            onChange={onChangeName}
            value={name}
            inputProps={{ minlength:"5" }}
            // error={length < 5 && length !== 0}
            // helperText={(length < 5 && length !== 0) ? "Mínimo de 5 caracteres." : ""}
          />
            <StyledTextField
              required
              label="Data de Nascimento"
              id="date"
              format="dd/MM/yyyy"
              variant="outlined"
              type="date"
              value={dateOfBirth}
              onChange={onChangeDateOfBirth}
              InputLabelProps={{
                shrink: true,
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          <StyledTextField
            required
            label="Email"
            placeholder="email@email.com"
            margin="normal"
            variant="outlined"
            name="email"
            onChange={onChangeEmail}
            value={email}
            error={!(email.match(/\S+@\S+\.\S+/)) && email !== ""}
            helperText={(!(email.match(/\S+@\S+\.\S+/)) && email !== "") ? "Insira um email válido." : ""}
          />
          <StyledTextField
            value={password}
            required
            name="password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            onChange={onChangePassword}
            // error={password.length < 6 && password.length !== 0}
            // helperText={(password.length < 6 && password.length !== 0) ? "Mínimo de 6 caracteres." : ""}
            InputProps={{
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
          <StyledTextField
            required
            name="passwordConfirm"
            variant="outlined"
            type={showPasswordConfirmation ? 'text' : 'password'}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            value={passwordConfirmation}
            error={ password !== passwordConfirmation && passwordConfirmation !== ""}
            helperText={ (password !== passwordConfirmation && passwordConfirmation !== "") ? "As senhas devem coincidir" : ""}
            onChange={onChangePasswordConfirmation}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={onClickShowPasswordConfirmation}
                  >
                    {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadPicture>
            <label htmlFor="icon-button-file">
              <ImgInputPicture>
                <PhotoCam color="primary" aria-label="upload picture" component="span">
                  <PhotoCameraIcon />
                </PhotoCam>
                <PicText>Selecione uma imagem</PicText>
              </ImgInputPicture>
            </label>
            <label htmlFor="outlined-button-file">
              <ChoosePicButton onClick={onClickUpload} variant="contained"  disableElevation component="span">
                Upload
              </ChoosePicButton>
            </label>
            <PictureInput accept="image/*" ref={fileInput} id="icon-button-file" type="file" />
          </LoadPicture>
          <SubmitButton vatiant="contained" type="submit">Enviar</SubmitButton>
        </FormContainer>
      </MainContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  signUp: (name, email, dateOfBirth, picture, password) => dispatch(signUp(name, email, dateOfBirth, picture, password)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);


