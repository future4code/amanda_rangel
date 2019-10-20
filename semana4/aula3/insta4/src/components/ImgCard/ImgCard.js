import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'


const ImgCardImg = styled.img`
  height: 30vh;
  min-width: 25vw;
`

export function ImgCard(props) {
  return (
    <ImgCardImg src={props.image} alt=""/>
  )
}

ImgCard.propTypes = {
  image: PropTypes.string.isRequired
}