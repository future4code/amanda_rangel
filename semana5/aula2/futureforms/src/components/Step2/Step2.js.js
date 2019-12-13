import React, { Component } from 'react'

const Step2Container = styled.div`
display: grid;
grid-template-rows: repeat(1fr, 5);
grid-gap: 15px;
justify-items: center;
`;

const Step2Title = styled.h2`

`

const MajorInput = styled.input`

`;


const CollegeInput = styled.input`

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

class Step2 extends Component {
  render() {
    return (
      <Step2Container>
        <Step2Title>ETAPA 1 - INFORMAÇÕES DO ENSINO SUPERIOR</Step2Title>
        <MajorLabel>Qual o curso?</MajorLabel>
        <MajorInput type="text" />
        <CollegeLabel>Qual a unidade de ensino?</CollegeLabel>
        <CollegeInput type="text" />
        <SubmitBtn>Finalizar</SubmitBtn>
      </Step2Container>
    )
  }
}

export default Step2
