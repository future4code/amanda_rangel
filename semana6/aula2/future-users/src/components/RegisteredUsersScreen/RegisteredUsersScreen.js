import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import axios from 'axios'
import { async } from 'q'
import UsersDetails from './UsersDetails/UsersDetails'

const RegisteredUsersContainer = styled.div`
  border: 1px gray solid;
  grid-gap: 20px;
  padding: 10px;
  font-family: sans-serif;
  color: #333;
  width: 70vw;
`
const RegisteredUsersTitle = styled.h2`
  text-align: center;
`

const RegisteredUsers = styled.div`
   width: 40vw;
   display: flex;
   justify-content: space-between;
`

const RegisteredUsersList = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
`
const UsersListDelete = styled.button`
  font-family: sans-serif;
  color: red;
  border: none;
  background: none;

`

const ReturnBtn = styled.button`
  font-family: sans-serif;
  color: #333;

`
const UserName = styled.h3``
const UserEmail = styled.h3``



class RegisteredUsersScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      isRegisteredUsersVisible: true,
      isUsersDetailsVisible: false,
    }

  }

  onClickReturnBtn = () => {
    this.props.toggleRegisteredUsersScreenVisibility();
    this.props.toggleRegistrationScreenVisibility();
  }

  toggleRegisteredUsersVisibility = () => {
    this.setState({
      isRegisteredUsersVisible: !this.state.isRegisteredUsersVisible,
    })
  }

  toggleUsersDetailsVisibility = () => {
    this.setState({
      isUsersDetailsVisible: !this.state.isUsersDetailsVisible,
    })
  }

  onClickUserName = () => {
    this.toggleRegisteredUsersVisibility();
    this.toggleUsersDetailsVisibility();
  }

  performGetAllUsersRequest = async () => {
    const usersList = await axios
      .get("https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
        {
          headers: {
            "api-token": "7ca5e243937cc100696e27893afc7777"
          }
        }
      )
    this.setState({
      list: usersList.data.result
    })

  }

  componentDidMount() {
    this.performGetAllUsersRequest();
  }

  onClickDelete = async (id) => {

    const confirmDelete = window.confirm("Tem certeza que deseja deletar o usuário?")

    if (confirmDelete) {
      await axios
        .delete(`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}`,
          {
            headers: {
              "api-token": "7ca5e243937cc100696e27893afc7777"
            }
          }
        )
      this.performGetAllUsersRequest();
    } else {
      return;
    }
  }

  getUser = async (id) => {

    await axios
      .get(`https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/${id}`,
        {
          headers: {
            "api-token": "7ca5e243937cc100696e27893afc7777"
          }
        }
      )
      this.onClickUserName();
    }

  render() {

    const listedUsers = this.state.list.map((item, i) => {
      return <RegisteredUsersList key={i}>
        <p onClick={() => { this.getUser(item.id) }}>{item.name}</p>
        <UsersListDelete onClick={() => { this.onClickDelete(item.id) }}>X</UsersListDelete>
      </RegisteredUsersList>
    });

    return (
      <div>
        {this.state.isRegisteredUsersVisible && (
          <RegisteredUsersContainer>
            <RegisteredUsersTitle>Usuários Cadastrados</RegisteredUsersTitle>
            <RegisteredUsers>
              <UserName>Nome</UserName>
            </RegisteredUsers>
            {listedUsers}
            <ReturnBtn onClick={this.onClickReturnBtn}>Voltar</ReturnBtn>
          </RegisteredUsersContainer>
        )}
        {this.state.isUsersDetailsVisible && (
          <UsersDetails
            list={this.state.list}
            toggleRegisteredUsersVisibility={this.toggleRegisteredUsersVisibility}
            toggleUsersDetailsVisibility={this.toggleUsersDetailsVisibility}>
          </UsersDetails>
        )}
      </div>
    );
  }
}


export default RegisteredUsersScreen;
