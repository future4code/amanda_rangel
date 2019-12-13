import React, { Component } from 'react';
import styled from 'styled-components'
import CampoEnvioCard from './components/CampoEnvioCard/CampoEnvioCard';
import CampoMsgsCard from './components/CampoMsgsCard/CampoMsgsCard';
import textura_cinza from './img/textura_cinza.jpg'

const ItemDaLista = styled.li`
  list-style:none;
  background-color: rgba(255, 102, 0, 0.686);
  border-radius: 5px;
  min-width: 10px;
  height: 20px;
  margin: 5px;
  color: white;
`
const CampoWrap = styled.div `
 display: flex;
 flex-direction: column;
 align-items: center;
`

const CampoContainer = styled.div`
  display: grid;
  grid-template-rows: 20fr 1fr;
  align-items: center;
  border: gray 1px solid;
  background-color: rgba(255, 102, 0, 0.394);
  border-radius: 10px;
  height: 100vh;
  padding: 0;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      listaDeMsgs: [],
      valorNome: '',
      valorMsg: ''
    };
  }

  adicionarMsg = () => {
    console.log(this.state.valorNome, this.state.valorMsg)
    const novaMsg= {
      nome: this.state.valorNome,
      msg: this.state.valorMsg
    }

    const copiaListaDeMsgs = [novaMsg, ...this.state.listaDeMsgs]

    this.setState({
      listaDeMsgs: copiaListaDeMsgs,
      valorNome: '',
      valorMsg: ''
    })
  }

  onChangeNome = (event) => {
    this.setState({valorNome: event.target.value})
  }

  onChangeMsg = (event) => {
    this.setState({valorMsg: event.target.value})
  }
 
  onCheckEnter = (event) => {
    if (event.key === "Enter") {
     return this.adicionarMsg();
    }
  }  

  render() {
    
    const listaDeElementos = this.state.listaDeMsgs.map((item, index) => {
      return <ItemDaLista key={index} msg={item.msg} nome={item.nome}>{item.nome + ':' + ' ' + item.msg}</ItemDaLista>
    })
   
    return (
      <CampoWrap>
        <CampoContainer>
          <CampoMsgsCard lista={listaDeElementos}/> 
          <CampoEnvioCard
            nome={this.state.valorNome} 
            msg={this.state.valorMsg}
            onChangeNome={this.onChangeNome} 
            onChangeMsg={this.onChangeMsg} 
            onClickEnviar={this.adicionarMsg}
            onCheckEnter={this.onCheckEnter} >
          </CampoEnvioCard>
        </CampoContainer>
      </CampoWrap>
    );
  }
}

export default App;