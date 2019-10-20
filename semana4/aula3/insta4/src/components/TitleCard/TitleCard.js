import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-width: 25vw;
`
const TitleCardImg = styled.img`
  height: 7vh;
  width: 7vh;
  padding: 0 10px;
`
const TitleCardName = styled.p`
  font-size: 1em;
  color: #333;
  font-weight: bold;
`

export function TitleCard(props) {
  return (

    <TitleCardContainer >
      <TitleCardImg src={props.image} alt=""/>
      <TitleCardName>{props.name}</TitleCardName>
    </TitleCardContainer >
  )
}

TitleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}