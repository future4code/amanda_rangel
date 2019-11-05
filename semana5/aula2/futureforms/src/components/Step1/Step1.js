import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Step1Container = styled.div`
display: grid;
grid-template-rows: repeat(1fr, 5);
grid-gap: 15px;
justify-items: center;
`;

const Step1Title = styled.h2`

`

const NameInput = styled.input`

`;

const AgeInput = styled.input`

`;

const EmailInput = styled.input`

`;

const NameLabel = styled.label`

`;

const AgeLabel = styled.label`

`;

const EmailLabel = styled.label`

`;

const Select = styled.select`

`;

const SelectOption = styled.option`

`;

const SubmitBtn = styled.button`

`;

class Step1 extends Component {
  
  
  render() {
    return (
      <Step1Container>
        <Step1Title>ETAPA 1 - DADOS GERAIS</Step1Title>
        <NameLabel>Qual é o seu nome?</NameLabel>
        <NameInput type="text" value={this.props.name}/>
        <AgeLabel>Qual é a sua idade?</AgeLabel>
        <AgeInput type="number" value={this.props.age} />
        <EmailLabel>Qual é o seu email?</EmailLabel>
        <EmailInput type="email" value={this.props.email}/>
        <Select>
          <SelectOption>Ensino Médio Incompleto</SelectOption>
          <SelectOption>Ensino Médio Completo</SelectOption>
          <SelectOption>Ensino Superior Incompleto</SelectOption>
          <SelectOption>Ensino Superior Completo</SelectOption>
        </Select>
        <SubmitBtn>Continuar</SubmitBtn>
      </Step1Container>
    )
  }
}


export default Step1;
