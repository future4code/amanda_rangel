import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostSectionCardContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  min-width: 25vw;
  margin: 5px;
`

class PostSectionCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <PostSectionCardContainer>
          {this.props.children} 
        </PostSectionCardContainer>
      );
    }
}

  PostSectionCard.propTypes = {
   
  }
  
export default PostSectionCard;