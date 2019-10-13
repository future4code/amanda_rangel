import React, { Component } from 'react'
import styled from "styled-components";


const ExpensesContainer = styled.div`
  background:  rgba(255, 102, 0, 0.686); 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  height: 60vh;
  min-width: 50vw;
  border: 1px gray solid;
  padding: 20px;
`

const ExpensesTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 20px 0;
`

const ExpensesLabels = styled.div`
  display: flex;
  justify-content: space-between;
`
const Label1 = styled.div``

const Label2 = styled.div`
  margin-right: 0 10px;
`
const Label3 = styled.div``

const ExpensesList = styled.div`
  display: flex;
  justify-content: space-between;
`

const ExpensesReturnBtn = styled.button`
  min-width: 10vw;
  height: 5vh;
  background-color: lightgray;
  border: none;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(255, 102, 0, 0.686);
  margin-top: 10px;

  &:hover {
    background-color: #333;
    color: rgba(255, 102, 0, 0.686);
  }
`



export class Expenses extends Component {
  constructor(props) {
    super(props)
    this.state = {


    }
  }

  onClickReturnBtn = () => {
    this.props.toggleExpensesVisibility();
    this.props.toggleRegisterVisibility();
  }

  render() {

    const allExpensesList = this.props.expensesList.map((item) => {
      return (<ExpensesList>
        <p>{item.amount}</p>
        <p>{item.type}</p>
        <p>{item.description}</p>
      </ExpensesList>);
    });

    console.log(this.props.expensesList)

    return (
      <ExpensesContainer>
        <ExpensesTitle>Extrato</ExpensesTitle>
        <ExpensesLabels>
          <Label1>Descrição</Label1>
          <Label2>Tipo</Label2>
          <Label3>Valor</Label3>
        </ExpensesLabels>
        {allExpensesList}
        <ExpensesReturnBtn onClick={this.onClickReturnBtn}>Voltar</ExpensesReturnBtn>
      </ExpensesContainer>
    )
  }
}
