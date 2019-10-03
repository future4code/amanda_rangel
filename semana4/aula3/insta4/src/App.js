import React from 'react';
import logo from './logo.svg';
import './App.css';
import heart_icon_red from './img/heart_icon_red.png'
import heart_icon_grey from './img/heart_icon_grey.png'
import comment_icon from './img/comment_icon.png'
import bookmark_icon from './img/bookmark_icon.png'
import astrodev from './img/astrodev.png'
import media_2 from './img/media_2.png'
import media_5 from './img/media_5.png'
import media_8 from './img/media_8.png'
import ImgIconCard from './components/ImgIconCard/ImgIconCard';
import { TitleCard } from './components/TitleCard/TitleCard';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCommentInput: false,
      changeImg: false,
      user1: ''
    }
  }

  onClickIconHeart = () => {
    const showCurrentImg = this.state.changeImg;

    const newState = {
      changeImg: !showCurrentImg
    }

    this.setState(newState)
    // console.log(this.state.showImg)
  }

  onClickIconComment = () => {
    const commentInput = this.state.showCommentInput;

    const newState = {
     showCommentInput: !commentInput
    }

    this.setState(newState)
    // console.log(this.state.showImg)
  }

    render(){

    let iconImg1 = {
    image: heart_icon_grey
    }

    let counter1 = {
      counter: '0'
    }

    let iconImg2 = {
      image: comment_icon
      }

    if(this.state.changeImg === true) {
      iconImg1 = {
        image: heart_icon_red
      }
      counter1 = {
        counter: '1'
      }
    }

    let input;

    if(this.state.showCommentInput === true) {
      input = (<form><input type='text' placeholder='Escreva seu comentário'/><button>Comentar</button></form>)
    }

    let user1 = {
      image: astrodev,
      name: 'Astrodev'
    }

    return (
      <div className="App">
        <div>
          <TitleCard image={user1.image} name={user1.name} />
        </div>
        <div className="icons-img">
          <div>
            <ImgIconCard onClickImg={this.onClickIconHeart} image={iconImg1.image} counter={counter1.counter}/>
          </div>
          <div>
            <ImgIconCard onClickImg={this.onClickIconComment} image={iconImg2.image} />
            {input}
         </div>
        </div>
      </div>
    );
  }  
}
export default App;
