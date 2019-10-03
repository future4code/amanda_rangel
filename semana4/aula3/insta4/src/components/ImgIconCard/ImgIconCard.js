import React from 'react'
import './ImgIconCard.css'
import PropTypes from 'prop-types'

class ImgIconCard extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
      return (
        <div className="icons-container">
          <div id="icon-img">
            <img onClick={this.props.onClickImg}  src={this.props.image}  alt="heart"/>
          </div>
          <div id="icon-counter">  
            <p>{this.props.counter}</p>    
          </div>
        </div>
      );
    }
}

  ImgIconCard.propTypes = {
    image: PropTypes.string.isRequired,
    counter: PropTypes.string.isRequired
  }
  
export default ImgIconCard;