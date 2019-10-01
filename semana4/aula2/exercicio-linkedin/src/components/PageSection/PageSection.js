import React from 'react';
import './PageSection.css';
import PropTypes from 'prop-types';

export function PageSection(props) {
  return (
    <div className="page-section">
      <h2>{ props.title }</h2>
      {props.children}
    </div>  
  )
  }
  
  PageSection.propTypes = {
    title: PropTypes.string.isRequired,
  }