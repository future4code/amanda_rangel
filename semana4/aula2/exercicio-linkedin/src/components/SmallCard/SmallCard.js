import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types';

export function SmallCard(props) {
  return (
    <div className="small-card">
      <div id="small-card-img">
        <img src={ props.image } alt="email"/>
      </div>  
      <div id="small-card-label">
        <h4>{props.label}</h4>
      </div>
      <div id="small-card-adress">
        <p>{props.adress}</p>
      </div>
    </div>
  )
  }
  
  SmallCard.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired
  }