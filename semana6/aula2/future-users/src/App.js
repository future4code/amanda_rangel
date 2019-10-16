import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import RegisteredUsersScreen from './components/RegisteredUsersScreen/RegisteredUsersScreen';
import RegistrationScreen from './components/RegistrrationScreen/RegistrationScreen';

const AppContainer = styled.div``

const usersList = [{
 user1: {
    name: 'John Doe',
    email: 'johndoe@gmail.com'
 }   
,

 user2: {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com'   
}
}]

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersList: usersList,
      name: '',
      email: '',
      isRegistrationScreenVisible: true,
      isRegisteredUsersScreenVisible: false,
    }
  }

  addUser = (newUser) => {

    const usersListCopy = [newUser,...this.state.usersList]

    this.setState({usersList: usersListCopy})
  }

  toggleRegistrationScreenVisibility = () => {
    this.setState({
      isRegistrationScreenVisible: !this.state.isRegistrationScreenVisible,
    })
  } 
  
  toggleRegisteredUsersScreenVisibility = () => {
    this.setState({
      isRegisteredUsersScreenVisible: !this.state.isRegisteredUsersScreenVisible,
    })
  }

  render() {
    
    return (
      <AppContainer>
        {this.state.isRegisteredUsersScreenVisible && (
        <RegisteredUsersScreen 
          usersList={this.state.usersList}
          toggleRegisteredUsersScreenVisibility={this.toggleRegisteredUsersScreenVisibility}
          toggleRegistrationScreenVisibility={this.toggleRegistrationScreenVisibility}
          />
        )}
        {this.state.isRegistrationScreenVisible && (
          <RegistrationScreen 
          addUser={this.addUser}
          toggleRegisteredUsersScreenVisibility={this.toggleRegisteredUsersScreenVisibility}
          toggleRegistrationScreenVisibility={this.toggleRegistrationScreenVisibility}
          /> 
        )}
      </AppContainer>
    );
  }
}


export default App;
