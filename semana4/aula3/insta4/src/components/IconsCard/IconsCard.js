import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconsCardContainer = styled.div `
  display: flex;
  align-items: center;
`

const IconsCardImg = styled.img`
   height: 20px;
   padding: 0 5px;
`

const IconsCounter = styled.p`
  padding: 0 5px;
`

class IconsCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <IconsCardContainer>
          <IconsCardImg onClick={this.props.onClickImg}  src={this.props.image}  alt="heart"/>
          <IconsCounter>{this.props.counter}</IconsCounter>    
        </IconsCardContainer>
      );
    }
}

  IconsCard.propTypes = {
    image: PropTypes.string.isRequired,
    counter: PropTypes.string
  }
  
export default IconsCard;