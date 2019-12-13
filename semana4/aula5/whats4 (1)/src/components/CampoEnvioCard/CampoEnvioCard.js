import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CampoEnvioCardContainer = styled.div`

`

const CampoEnvioInputUsuario = styled.input`

`
const CampoEnvioInputMsg = styled.input`

`
const CampoEnvioBtn = styled.button`

`




class CampoEnvioCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <CampoEnvioCardContainer>
          <CampoEnvioInputUsuario placeholder='Usuário' value={this.props.valor}/>
          <CampoEnvioInputMsg placeholder='Mensagem'value={this.props.valor}/>
          <CampoEnvioBtn>Enviar</CampoEnvioBtn> 
        </CampoEnvioCardContainer>
      );
    }
}

  CampoEnvioCard.propTypes = {
   value: PropTypes.string.isRequired
  }
  
export default CampoEnvioCard;