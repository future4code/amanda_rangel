import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CampoMsgsCardContainer = styled.ul`

`

class CampoMsgsCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <CampoMsgsCardContainer>
          {this.props.lista} 
        </CampoMsgsCardContainer>
      );
    }
}

  CampoMsgsCard.propTypes = {
   
  }
  
export default CampoMsgsCard;