import React, { Component } from 'react';
import styled from 'styled-components';


const RegisterContainer = styled.div`
  background:  rgba(255, 102, 0, 0.686); 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  min-height: 60vh;
  width: 50vw;
  border: 1px gray solid;
  padding: 20px;
`

const RegisterTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 20px 0;
`

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const RegisterInputAmount = styled.input`
  border-top: none;
  border-style: none;
  border-bottom: gray 1px solid;
  background: rgba(255, 100, 0, 0.000); 
  min-width: 10vw;
`


const RegisterTypeSelector = styled.select`
  min-width: 30vw;
  background:rgba(255, 100, 0, 0.000); 
  color: #333;
`

const RegisterOption = styled.option`
 
`

const RegisterInputDescription = styled.input`
  border-top: none;
  border-style: none;
  border-bottom: gray 1px solid;
  background: rgba(255, 100, 0, 0.000); 
  min-width: 10vw;
`

const RegisterAmountLabel = styled.label`
margin-top: 10px;
`

const RegisterTypeLabel = styled.label`
margin-top: 10px;
`

const RegisterDescriptionLabel = styled.label`
margin-top: 10px;
`

const RegisterBtnWrap = styled.div`
 height: 15vh;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 padding-top: 20px;
`

const RegisterSaveBtn = styled.button`
  min-width: 10vw;
  height: 5vh;
  background-color: lightgray;
  border: none;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(255, 102, 0, 0.686);

  &:hover {
    background-color: #333;
    color: rgba(255, 102, 0, 0.686);
  }
`

const RegisterExpensesBtn = styled.button`
  min-width: 10vw;
  height: 5vh;
  background-color: lightgray;
  border: none;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(255, 102, 0, 0.686);

  &:hover {
    background-color: #333;
    color: rgba(255, 102, 0, 0.686);
  }
`

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountValue: "",
      typeValue: "",
      descriptionValue: ""
    };
  }

    onChangeAmountInput = event => {
      this.setState({amountValue: event.target.value})
    }
    onChangeSelectedType = event => {
      this.setState({typeValue: event.target.value})
    }
    onChangeDescriptionInput = event => {
      this.setState({descriptionValue: event.target.value})
    }

    onClickSave = () => {
      const newExpense = {
        id: Date.now(),
        amount: parseInt(this.state.amountValue),
        type: this.state.typeValue,
        description: this.state.descriptionValue,
      };
      this.props.onClickSave(newExpense);
    };

    onClickExpensesBtn = () => {
      this.props.toggleExpensesVisibility();
      this.props.toggleRegisterVisibility();
    }

  render() {
    return (
      <RegisterContainer>
        <RegisterTitle>Despesas</RegisterTitle>
        <RegisterForm>
        <RegisterAmountLabel>Valor: </RegisterAmountLabel>
        <RegisterInputAmount 
          type="number"
          value={this.state.amountValue}
          onChange={this.onChangeAmountInput}
          />
        <RegisterTypeLabel>Tipo</RegisterTypeLabel>
        <RegisterTypeSelector 
        value={this.state.typeValue}
        onChange={this.onChangeSelectedType}>
          <RegisterOption value=""></RegisterOption>
          <RegisterOption value="comida">Comida</RegisterOption>
          <RegisterOption value="transporte">Transporte</RegisterOption>
          <RegisterOption value="viagem">Viagem</RegisterOption>
        </RegisterTypeSelector>
        <RegisterDescriptionLabel>Descrição: </RegisterDescriptionLabel>
        <RegisterInputDescription
          type="text"
          value={this.state.descriptionValue}
          onChange={this.onChangeDescriptionInput}
          />
        </RegisterForm>
        <RegisterBtnWrap>
          <RegisterSaveBtn onClick={this.onClickSave}>Salvar</RegisterSaveBtn> 
          <RegisterExpensesBtn 
          onClick={this.onClickExpensesBtn}
          >Extrato
          </RegisterExpensesBtn>
          </RegisterBtnWrap>
      </RegisterContainer>
    )
  }
}


