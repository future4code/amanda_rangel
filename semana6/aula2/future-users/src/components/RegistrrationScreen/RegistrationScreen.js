import React, { Component } from 'react'
import styled from 'styled-components'

const RegistrationScreenContainer = styled.div`
  border: 1px gray solid;
  display: grid;
  grid-gap: 20px;
  padding: 10px;
  font-family: sans-serif;
  color: #333;
`
const RegistrationForm = styled.div`
  display: flex;
`

const RegistrationLabel = styled.label`
  margin-right: 10px;
`
const RegistrationInput = styled.input``
const RegistrationBtn = styled.div``
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

  onClickSaveBtn = () => {

    const newUser = {
      name: this.state.userNameValue,
      email: this.state.userEmailValue
    }
    
    this.props.addUser(newUser);

  }

  onClickRegisteredListBtn = () => {
    this.props.toggleRegisteredUsersScreenVisibility();
    this.props.toggleRegistrationScreenVisibility();
  }



  render () {
    return (
      <RegistrationScreenContainer>
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
