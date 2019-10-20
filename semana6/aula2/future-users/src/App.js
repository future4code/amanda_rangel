import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import RegisteredUsersScreen from './components/RegisteredUsersScreen/RegisteredUsersScreen';
import RegistrationScreen from './components/RegistrrationScreen/RegistrationScreen';

const AppContainer = styled.div``


class App extends Component {
  constructor() {
    super();
    this.state = {
      isRegistrationScreenVisible: true,
      isRegisteredUsersScreenVisible: false,
    }
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
          toggleRegisteredUsersScreenVisibility={this.toggleRegisteredUsersScreenVisibility}
          toggleRegistrationScreenVisibility={this.toggleRegistrationScreenVisibility}
          />
        )}
        {this.state.isRegistrationScreenVisible && (
          <RegistrationScreen 
          toggleRegisteredUsersScreenVisibility={this.toggleRegisteredUsersScreenVisibility}
          toggleRegistrationScreenVisibility={this.toggleRegistrationScreenVisibility}
          /> 
        )}
      </AppContainer>
    );
  }
}


export default App;
