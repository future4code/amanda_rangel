import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import PostCard from "../PostCard"
import { TextField, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { createPosts, fetchPosts,setSelectedPost } from "../../actions/allActions";
import astronaut_F4 from "../../img/astronaut_F4.png"

const FeedWrapper = styled.div`
  display: grid;
  justify-content: center;
`
const Form = styled.form`
  margin-top: 40px;
  display: grid;
  justify-items: center;
  color: grey;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const AppBarStyled = styled(AppBar)`
   width: 100vw;
`
const ToolbarStyled = styled(Toolbar)`
  display: flex;
  padding: 5px;
  margin-right: 40px;
`

const AstronautImg = styled.img`
  width: 40px;
`

const TypographyStyled = styled(Typography)`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`
const H2 = styled.h2`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
`
const TextFieldStyled = styled(TextField)`
  width: 50vw;
`
class Feed extends React.Component {
 
  constructor() {
    super ()
    this.state = {
      title: " ",
      text: " ",
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
    const token = window.localStorage.getItem("token");
 
    if (!token) {
      this.props.goToLoginPage();
   }
  }
  

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleContentChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createPostAction(
        this.state.title, 
        this.state.text
    )
    alert("Post Criado!");
  };

  handleOnClickCard = postId => {
    this.props.setSelectedPost(postId);
    this.props.goToPostDetails();
  }


  render(){
    return (
      <FeedWrapper>
         <AppBarStyled position="static" color="primary">
          <ToolbarStyled>
            <Button>
              <AstronautImg src={astronaut_F4} 
              onClick={this.props.goToLoginPage}
              />
            </Button>
            <TypographyStyled >
              <H2>4eddit</H2>
              A rede do futuro
          </TypographyStyled>
          </ToolbarStyled>
        </AppBarStyled>
        <Form onSubmit={this.handleSubmit}>
          <label>Criar Post</label>
          <TextFieldStyled
            required
            name="title"
            variant="outlined"
            type="text"
            margin="normal"
            label="Título"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <TextFieldStyled
            required
            name="text"
            multiline
            rows="4"
            margin="normal"
            type="text"
            variant="outlined"
            label="Conteúdo"
            value={this.state.text}
            onChange={this.handleContentChange}
          />
          <Button 
          type="submit"
          variant="contained"
          color="primary">
            <Typography color="textSecondary">Enviar</Typography>
          </Button>
        </Form>
        {this.props.posts ?
          this.props.posts.map(post => (
            <PostCard 
            post={post}
            handleOnClickCard={this.handleOnClickCard}
            />
          )
        )
          : ""
       }
      </FeedWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}
const mapDispatchToProps = dispatch => ({
  createPostAction: (title, text) => dispatch(createPosts(title,text)),
  fetchPosts: () => dispatch(fetchPosts()),
  setSelectedPost: (postId) => dispatch(setSelectedPost(postId)),
  goToPostDetails: () => dispatch(push(routes.postDetails)),
  goToLoginPage: () => dispatch(push(routes.login)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)


