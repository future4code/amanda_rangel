import React from 'react';
import './ImageButton.css';
import PropTypes from 'prop-types';

export function ImageButton(props) {
  return (
    <div className="image-button">
      <button id="image-button-btn"><img src={props.image} alt=""/><p>{props.label}</p></button>
    </div>
  )
  }
  
  ImageButton.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }