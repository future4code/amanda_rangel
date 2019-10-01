import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';


export function BigCard(props) {
return (
  <div className="big-card">
    <div id="big-card-img">
      <img src={ props.image } alt="foto"/>
    </div>  
    <div id="big-card-text">
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  </div>
)
}

BigCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
}