import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CampoEnvioCardContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 5vh;
  
`
const CampoEnvioInputUsuario = styled.input`
padding: 1px 8px;
font-size: 10px;
width: 5vw;
border-style: none;
border-radius: 10px;
margin: 0 5px;
`
const CampoEnvioInputMsg = styled.input`
padding: 1px 8px;
font-size: 10px;
width: 30vw;
border-style: none;
border-radius: 10px;

`
const CampoEnvioBtn = styled.button`
padding: 1px 8px;
font-size: 10px;
border-radius: 10px;
border-style: none;
background-color: rgba(255, 102, 0, 0.686);
margin: 3px;
color: white;
`

class CampoEnvioCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <CampoEnvioCardContainer>
          <CampoEnvioInputUsuario type='text' placeholder='Usuário' value={this.props.nome} onChange={this.props.onChangeNome}/>
          <CampoEnvioInputMsg type='text' placeholder='Mensagem' value={this.props.msg} onChange={this.props.onChangeMsg} onKeyDown={this.props.onCheckEnter}/>
          <CampoEnvioBtn type='submit' onClick={this.props.onClickEnviar}>Enviar</CampoEnvioBtn> 
        </CampoEnvioCardContainer>
      );
    }
}

  CampoEnvioCard.propTypes = {
   value: PropTypes.string.isRequired,
  }
  
export default CampoEnvioCard;