import React, { Component } from 'react';
import { Register } from './components/Register/Register';
import { Expenses } from './components/Expenses/Expenses';
import styled from 'styled-components';

const AppContainer = styled.div`

`
const AppTitle = styled.h1`
color: rgba(255, 102, 0, 0.686);;
background:  lightgray; 
border: grey 1px solid;
border-bottom: none;
padding: 0 5px;;
margin: 0;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expensesList: [],
      id: Date.now,
      amount: "",
      type: "",
      description: "",
      isRegisterVisible: true,
      isExpensesVisible: false,
    };
  }

  addExpenses = (newExpense) => {
    const expensesListCopy = [newExpense, ...this.state.expensesList]

    this.setState({expensesList: expensesListCopy})
  }

  toggleExpensesVisibility = () => {
    this.setState({
      isExpensesVisible: !this.state.isExpensesVisible,
    })
  } 
  
  toggleRegisterVisibility = () => {
    this.setState({
      isRegisterVisible: !this.state.isRegisterVisible,
    })
  }
 
  render() {
    return (
      <AppContainer>
        <AppTitle>Budget4</AppTitle>
      {this.state.isRegisterVisible && (
        <Register
          onClickSave={this.addExpenses}
          toggleExpensesVisibility={this.toggleExpensesVisibility}
          toggleRegisterVisibility={this.toggleRegisterVisibility}>
        </Register>
      )}
      
       {this.state.isExpensesVisible && (
        <Expenses 
          toggleRegisterVisibility={this.toggleRegisterVisibility}
          toggleExpensesVisibility={this.toggleExpensesVisibility}
          expensesList={this.state.expensesList}>
        </Expenses>
       )}
       
      </AppContainer>
    );
  }
}

export default App;
