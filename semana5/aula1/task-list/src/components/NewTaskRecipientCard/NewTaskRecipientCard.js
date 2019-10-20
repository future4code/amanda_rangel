import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NewTaskRecipientCardContainer = styled.ul`
display: flex;
flex-direction: column;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

class NewTaskRecipientCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <NewTaskRecipientCardContainer>
          {this.props.children}
        </NewTaskRecipientCardContainer>
      );
    }
}

  NewTaskRecipientCard.propTypes = {
 
  }
  
export default NewTaskRecipientCard;