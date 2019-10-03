import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NewPostCardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr, 5);
  justify-items: center;
  min-width: 25vw;
  margin: 5px;
  
`
const NewPostCardTitle = styled.h3`
  text-align: center;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  
`
const NewPostCardUserPic = styled.input`
  margin: 5px;
`
const NewPostCardUserName = styled.input`
  margin: 5px;
`
const NewPostCardPostPic = styled.input`
  margin: 5px;
`
const NewPostCardPostBtn = styled.button`
  margin: 5px;
  width: 10vw;
`


class NewPostCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <NewPostCardContainer>
          <NewPostCardTitle>Criar um novo Post</NewPostCardTitle>
          <NewPostCardUserPic type={this.props.type} value={this.props.value} placeholder="Foto do Usuário" />
          <NewPostCardUserName type={this.props.type} value={this.props.value}  placeholder="Nome do Usuário" />
          <NewPostCardPostPic type={this.props.type} value={this.props.value}  placeholder="URL da Imagem" />
          <NewPostCardPostBtn>Enviar</NewPostCardPostBtn>
        </NewPostCardContainer>
      );
    }
}

  NewPostCard.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string
  }
  
export default NewPostCard;