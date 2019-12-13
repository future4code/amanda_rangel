import React, { Component } from 'react';
import { Register } from './components/Register/Register';
import { Expenses } from './components/Expenses/Expenses';
import styled from 'styled-components';
import FilterExpenses from './components/FilterExpenses/FilterExpenses'

const AppContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 20px;
`

const AppTitle = styled.h1`
  color: rgba(255, 102, 0, 0.686);
  background:  lightgray; 
  border: grey 1px solid;
  border-bottom: none;
  margin: 0;
  width: 50vw;
  padding: 0 20px;
`
const ExpensesContainer = styled.div `
  
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
      filters: {
        minValue: null,
        maxValue: null,
      },
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

   updateFilterValue = (newFilterValue) => {
    this.setState({
      filters: {
        ...this.state.filters,
        ...newFilterValue,
      },
    })
  }

  filterValues = () => {
    const {expensesList, filters} = this.state
    
    let filterValues = expensesList.filter((expensesList) => {
        return expensesList.amount <=(filters.maxValue || Infinity)})
      .filter((expensesList) => {
        return expensesList.amount >= (filters.minValue || 0)
      })
      
    return filterValues  
  }


 
  render() {

    const filteredValues = this.filterValues();
      
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
        <ExpensesContainer>
          <FilterExpenses onFilterChange={this.updateFilterValue}/>  
          <Expenses 
            toggleRegisterVisibility={this.toggleRegisterVisibility}
            toggleExpensesVisibility={this.toggleExpensesVisibility}
            filteredExpenses={filteredValues}
          />
         
        </ExpensesContainer>
       )}
      </AppContainer>
    );
  }
}

export default App;
