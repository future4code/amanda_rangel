import React from 'react';
import heart_icon_red from './img/heart_icon_red.png'
import heart_icon_grey from './img/heart_icon_grey.png'
import comment_icon from './img/comment_icon.png'
import bookmark_icon from './img/bookmark_icon.png'
import astrodev from './img/astrodev.png'
import media_2 from './img/media_2.png'
import media_5 from './img/media_5.png'
import media_8 from './img/media_8.png'
import IconsCard from './components/IconsCard/IconsCard';
import { TitleCard } from './components/TitleCard/TitleCard';
import styled from 'styled-components';
import { ImgCard } from './components/ImgCard/ImgCard';
import NewPostCard from './components/NewPostCard/NewPostCard';

// styled components
const AppWrap = styled.div`
  display: grid;
  grid-template-rows: repeat(1fr, 3);
  justify-items: center;
  grid-gap: 10px;
`
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: grey 1px solid;
  min-width: 25vw;
`
const AppIcons = styled.div`
  display: flex;
  justify-content: space-between;
`

const CommentForm = styled.form`
  display: flex;
  justify-content: space-around;
`
const CommentInput = styled.input`
  width: 15vw;
  margin: 5px;
  font-size: 10px;
`
const CommentBtn = styled.button`
  width: 10vw;
  margin: 5px;
  font-size: 10px;
`

// class component
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCommentInput1: false,
      showCommentInput2: false,
      showCommentInput3: false,
      changeImg1: false,
      changeImg2: false,
      changeImg3: false,
      user1: '',
      commentCounter1: 0,
      commentCounter2: 0,
      commentCounter3: 0,
      newPostList:[{
        userPic: '',
        userName: '',
        postImg: ''
      }],
    }
  }

// interactive functions
  // heart icons
  onClickIconHeart1 = () => {
    const showCurrentImg1 = this.state.changeImg1;

    const newState1 = {
      changeImg1: !showCurrentImg1
    }

    this.setState(newState1)
    
  }

  onClickIconHeart2 = () => {
    const showCurrentImg2 = this.state.changeImg2;

    const newState2 = {
      changeImg2: !showCurrentImg2
    }

    this.setState(newState2)
    
  }

  onClickIconHeart3 = () => {
    const showCurrentImg3 = this.state.changeImg3;

    const newState3 = {
      changeImg3: !showCurrentImg3
    }

    this.setState(newState3)
  
  }

  // comment icons
  onClickIconComment1 = () => {
    const commentInput1 = this.state.showCommentInput1;

    const newState1 = {
     showCommentInput1: !commentInput1
    }

    this.setState(newState1)
   
  }
  onClickIconComment2 = () => {
    const commentInput2 = this.state.showCommentInput2;

    const newState2 = {
     showCommentInput2: !commentInput2
    }

    this.setState(newState2)
    
  }
  onClickIconComment3 = () => {
    const commentInput3 = this.state.showCommentInput3

    const newState3 = {
     showCommentInput3: !commentInput3
    }

    this.setState(newState3)
    
  }

  // comment counter
  incrementCount1 = (event) => {
    event.preventDefault();
    let counterNumber1 = this.state.commentCounter1;
    this.setState({commentCounter1: counterNumber1 + 1 })
  };
  incrementCount2 = (event) => {
    event.preventDefault();
    let counterNumber2 = this.state.commentCounter2;
    this.setState({commentCounter2: counterNumber2 + 1 })
  };
  incrementCount3 = (event) => {
    event.preventDefault();
    let counterNumber3 = this.state.commentCounter3;
    this.setState({commentCounter3: counterNumber3 + 1 })
  };
  // new post
  createNewPost = () => {
    let newPost = {
      userPic: this.state.userPic,
      userName: this.state.userName,
      postImg: this.state.postImg
    }

    let newPostListCopy = [newPost,...this.state.newPostList]

    this.setState({
      newPostList: newPostListCopy,
      userPic: '',
      userName: '',
      postImg: ''
    })
  }

    render(){

// variables
  // heart & comment icons
    let icon1 = {
    image: heart_icon_grey
    }

    let icon2 = {
      image: comment_icon
    }

    let icon3 = {
    image: heart_icon_grey
    }

    let icon4 = {
      image: comment_icon
    }

    let icon5 = {
    image: heart_icon_grey
    }

    let icon6 = {
      image: comment_icon
    }

  // hearts counters
    let counter1 = {
      counter: '0'
    }

    let counter2 = {
      counter: '0'
    }

    let counter3 = {
      counter: '0'
    }

  // comments inputs
    let input1;
    let input2;
    let input3;
    
  // users description
    let user1 = {
      image: astrodev,
      name: 'Astrodev'
    }

  // post images
    let img1 = {
      image: media_8
    }
    let img2 = {
      image: media_2
    }
    let img3 = {
      image: media_5
    }
  // comment counters
    let commentCounter1 = this.state.commentCounter1;
    let commentCounter2 = this.state.commentCounter2;
    let commentCounter3 = this.state.commentCounter3;

// conditions
  // hearts and hearts "counters" 
    if(this.state.changeImg1 === true) {
      icon1 = {
        image: heart_icon_red
      }
      counter1 = {
        counter: '1'
      }
    }
    if(this.state.changeImg2 === true) {
      icon3 = {
        image: heart_icon_red
      }
      counter2 = {
        counter: '1'
      }
    }
    if(this.state.changeImg3 === true) {
      icon5 = {
        image: heart_icon_red
      }
      counter3 = {
        counter: '1'
      }
    }

  // show-comments conditions 
    if(this.state.showCommentInput1 === true) {
      input1 = (<CommentForm><CommentInput type='text' placeholder='Escreva seu comentário'/><CommentBtn onClick={this.incrementCount1}>Comentar</CommentBtn></CommentForm>)
    }
    if(this.state.showCommentInput2 === true) {
      input2 = (<CommentForm><CommentInput type='text' placeholder='Escreva seu comentário'/><CommentBtn onClick={this.incrementCount2}>Comentar</CommentBtn></CommentForm>)
    }
    if(this.state.showCommentInput3 === true) {
      input3 = (<CommentForm><CommentInput type='text' placeholder='Escreva seu comentário'/><CommentBtn onClick={this.incrementCount3}>Comentar</CommentBtn></CommentForm>)
    }

// print on layout 
    return (
      <AppWrap>
        <AppContainer>
          <NewPostCard />
        </AppContainer>
        <AppContainer>
          <TitleCard image={user1.image} name={user1.name} />
          <ImgCard image={img1.image}/>
          <AppIcons>
            <IconsCard onClickImg={this.onClickIconHeart1} image={icon1.image} counter={counter1.counter}/>
            <IconsCard onClickImg={this.onClickIconComment1} image={icon2.image} counter={commentCounter1}/>
          </AppIcons>
            {input1} 
        </AppContainer>
        <AppContainer>
          <TitleCard image={user1.image} name={user1.name} />
          <ImgCard image={img2.image}/>
          <AppIcons>
            <IconsCard onClickImg={this.onClickIconHeart2} image={icon3.image} counter={counter2.counter}/>
            <IconsCard onClickImg={this.onClickIconComment2} image={icon4.image} counter={commentCounter2}/>
          </AppIcons>
            {input2} 
        </AppContainer>
        <AppContainer>
          <TitleCard image={user1.image} name={user1.name} />
          <ImgCard image={img3.image}/>
          <AppIcons>
            <IconsCard onClickImg={this.onClickIconHeart3} image={icon5.image} counter={counter3.counter}/>
            <IconsCard onClickImg={this.onClickIconComment3} image={icon6.image} counter={commentCounter3}/>
          </AppIcons>
            {input3} 
        </AppContainer>
       </AppWrap>
    );
  }  
}
export default App;
