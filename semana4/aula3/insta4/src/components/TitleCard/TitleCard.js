import React from 'react';
import './TitleCard.css'
import PropTypes from 'prop-types'

export function TitleCard(props) {
  return (
    <div className="container">
      <div className="user-img">
        <img src={props.image} alt=""/>
      </div>  
      <div className="user-name">
        <p>{props.name}</p>
      </div>
    </div>
  )
}

TitleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}