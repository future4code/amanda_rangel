import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RegisteredUsersContainer = styled.div`
  border: 1px gray solid;
  grid-gap: 20px;
  padding: 10px;
  font-family: sans-serif;
  color: #333;
`

const RegisteredUsers = styled.div`
   display: flex;
   justify-content: space-evenly;
`

const RegisteredUsersList = styled.li`
  list-style: none;
`

const ReturnBtn = styled.button`
  font-family: sans-serif;
  color: #333;

`


const UserName = styled.h3``
const UserEmail = styled.h3``

class RegisteredUsersScreen extends Component {
  constructor () {
    super()
   
  }

  onClickReturnBtn = () => {
    this.props.toggleRegisteredUsersScreenVisibility();
    this.props.toggleRegistrationScreenVisibility();
  }
  
  render() {
  
    const listedUsers = this.props.usersList.map(item => {
      return <RegisteredUsersList>        
              <p>{item.name}</p>
              <p>{item.email}</p>          
            </RegisteredUsersList>
    });

  return (
      <RegisteredUsersContainer>
        <RegisteredUsers>
          <UserName>Nome</UserName>
          <UserEmail>Email</UserEmail>
        </RegisteredUsers>
        {listedUsers}
        <ReturnBtn onClick={this.onClickReturnBtn}>Voltar</ReturnBtn>
      </RegisteredUsersContainer>
    );
  }
}


export default RegisteredUsersScreen;
