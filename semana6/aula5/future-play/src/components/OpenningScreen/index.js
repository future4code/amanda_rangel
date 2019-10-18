import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import astrodev from '/home/amanda/Desktop/ProjetosF4/amanda_rangel/semana6/aula5/future-play/src/components/img/astrodev.png'

const OpenningScreenContainer = styled.div`
  margin:0;
  // border: 1px gray solid;
  // border-top: none;
  display: grid;
  align-content: center;
  justify-items: center;
`
const UserImg = styled.img``
const UserName = styled.h3``


export class OpenningScreen extends React.Component {
  constructor(props) {
  super(props)
  }

  render(){
    return(
      <OpenningScreenContainer>
        <UserImg src={astrodev}/>
        <UserName>Astrodev</UserName>
      </OpenningScreenContainer>
    )
    
  }
}