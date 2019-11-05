import React, { Component } from 'react'

export class Step3 extends Component {
  render() {
    return (
      <Step3Container>
        <Step3Title>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Step3Title>
        <InputLabel>Por que você não terminou o curso de graduação?</InputLabel>
        <Input type="text"/>
        <Select>
          <SelectOption>Curso técnico</SelectOption>
          <SelectOption>Curso de inglês</SelectOption>
          <SelectOption>Não fiz</SelectOption>
        </Select>
        <SubmitBtn>Continuar</SubmitBtn>
      </Step3Container>
    )
  }
}

export default Step3
