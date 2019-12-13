import React, { Component } from 'react';
import styled from 'styled-components'
import CampoEnvioCard from './components/CampoEnvioCard/CampoEnvioCard';
import CampoMsgsCard from './components/CampoMsgsCard/CampoMsgsCard';

const ItemDaLista = styled.li`
  
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

  adicionarMsg= () => {
    
    const novaMsg= {
      nome: this.state.valorNome,
      msg: this.state.valorMsg
    }

    const copiaListaDeMsgs = [novaMsg, ...this.state.listaDeMsgs]

    this.setState({
      listaDeMsgs: copiaListaDeMsgs,
      valorTexto: '',
      valorCor: ''
    })
  }

  onChangeNome = (event) => {
    this.setState({valorNome: event.target.value})
  }

  onChangeMsg = (event) => {
    this.setState({valorMsg: event.target.value})
  }

  render() {
    const listaDeElementos = this.state.listaDeMsgs.map((item, index) => {
      return <ItemDaLista key={index} msg1={item.nome + ' ' + item.msg}></ItemDaLista>
    })

    return (
      <div>
        <CampoEnvioCard type="text" 
          value={this.state.valorNome}
          onChange={this.onChangeNome}/>
        <CampoMsgsCard>
          {listaDeElementos}
        </CampoMsgsCard>
      </div>
    );
  }
}

export default App;