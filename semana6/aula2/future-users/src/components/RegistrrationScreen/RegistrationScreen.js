import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { async } from 'q'

const RegistrationScreenContainer = styled.div`
  border: 1px gray solid;
  display: grid;
  grid-gap: 20px;
  padding: 10px;
  padding-bottom: 20px;
  font-family: sans-serif;
  color: #333;
  width: 70vw;
`

const RegistrationTitle = styled.h2`
  text-align: center;
`

const RegistrationForm = styled.div`
  display: flex;
  justify-content: center;
`

const RegistrationLabel = styled.label`
  margin-right: 10px;

`

const RegistrationInput = styled.input`

`

const RegistrationBtn = styled.div`
  display: flex;
  justify-content: center;
`

const SaveBtn = styled.button`
  margin-right: 10px;
  font-family: sans-serif;
  color: #333;
`

const RegisteredListBtn = styled.button`
  font-family: sans-serif;
  color: #333;
`

export default class RegistrationScreen extends Component {
  constructor(props) {
    super (props)
    this.state = {
      userNameValue: '',
      userEmailValue: '',
    }
  }

  onChangeUserName = (event) => {
    this.setState({userNameValue: event.target.value})
  }

  onChangeUserEmail = (event) => {
    this.setState({userEmailValue: event.target.value})
  }

  onClickSaveBtn = async () => {

    const newUser = {
      name: this.state.userNameValue,
      email: this.state.userEmailValue
    }
    await axios.post(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser", newUser,
      {
        headers:{
          "api-token": "7ca5e243937cc100696e27893afc7777"
        }
      }
    )
      window.alert("Usuário salvo com sucesso!")  
    
  }

  onClickRegisteredListBtn = () => {
    this.props.toggleRegisteredUsersScreenVisibility();
    this.props.toggleRegistrationScreenVisibility();
  }


  render () {
    return (
      <RegistrationScreenContainer>
        <RegistrationTitle>Cadastro</RegistrationTitle>
        <RegistrationForm>
          <RegistrationLabel>Nome: </RegistrationLabel>
          <RegistrationInput type="text" placeholder="Nome do Usuário" value={this.state.userNamevalue} onChange={this.onChangeUserName} 
          />
        </RegistrationForm>
        <RegistrationForm>
          <RegistrationLabel>Email: </RegistrationLabel>
          <RegistrationInput type="email" placeholder="Email do Usuário" value={this.state.userEmailvalue} onChange={this.onChangeUserEmail} 
          />
        </RegistrationForm>
        <RegistrationBtn>
          <SaveBtn onClick={this.onClickSaveBtn}>Salvar</SaveBtn>
          <RegisteredListBtn onClick={this.onClickRegisteredListBtn}>Lista</RegisteredListBtn>
        </RegistrationBtn>
      </RegistrationScreenContainer>
    )
  }
}
