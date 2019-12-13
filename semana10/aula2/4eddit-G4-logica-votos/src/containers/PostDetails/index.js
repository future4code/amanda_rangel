import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import CommentCard from "../CommentCard"
import PostCard from "../PostCard"
import { TextField, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { createComment, getPostDetails, setPostDetails, postVoteUp } from "../../actions/allActions";
import astronaut_F4 from "../../img/astronaut_F4.png";

const FeedContainer = styled.div`

`
const AppBarStyled = styled(AppBar)`
   width: 100vw;

`
const ToolbarStyled = styled(Toolbar)`
  display: flex;
  padding: 5px;
  margin-right: 40px;
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
const AstronautImg = styled.img`
  width: 40px;
`
const PostWrapper = styled.div`
  display: grid;
  flex-direction: column;
  align-content: center;
  margin-top: 60px;
`
const FormStyled = styled.form`
  display: grid;
  justify-items: center;
  color: grey;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const TextFieldStyled = styled(TextField)`
  width: 50vw;
`
const CommentLabel = styled.label`
  margin-top: 30px;
`

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:""
    }
  }

  componentDidMount() {
    this.props.getPostDetails(this.props.postId);
    const token = window.localStorage.getItem("token");
 
    if (!token) {
      this.props.goToLoginPage();
   }
  }

  handleCommentChange = (event) => {
    this.setState({
      text: event.target.value
    });

  }

  handleSubmit = event => {
    const { postId } = this.state
    event.preventDefault();
    this.props.createComment(this.state.text, postId);
    this.props.getPostDetails(postId);
    alert("Comentário Criado!");
  };



  render() {

    return (
      <FeedContainer>
        <AppBarStyled color="primary">
          <ToolbarStyled>
            <Button>
              <AstronautImg 
              src={astronaut_F4} 
              onClick={this.props.goToLoginPage}
              />
            </Button>
            <TypographyStyled >
              <H2>4eddit</H2>
              A rede do futuro
          </TypographyStyled>
          </ToolbarStyled>
        </AppBarStyled>
        <PostWrapper>
          <PostCard 
            post={this.props.postDetails}
          />  
          <FormStyled onSubmit={this.handleSubmit}>
            <CommentLabel>Deixe um comentário</CommentLabel>
          <TextFieldStyled
            name="text"
            id="outlined-multiline-static"
            label="Comentário"
            multiline
            rows="4"
            margin="normal"
            variant="outlined"
            value={this.state.text}
            onChange={this.handleCommentChange}
          />
          <Button 
          type="submit" 
          variant="contained"
          color="primary">
            <Typography color="textSecondary">
              Comentar
            </Typography>
          </Button>
        </FormStyled>
        {this.props.postDetails.comments ?
            this.props.postDetails.comments.map(comment => (
              <CommentCard 
                comment={comment}
                postId={this.props.postId}
              />
            )
          )
          : ""
        }
      </PostWrapper>
    </FeedContainer>
    )
  }
}

const mapStateToProps = state => ({
  postId: state.posts.postId,
  postDetails: state.posts.postDetails
 
})

const mapDispatchToProps = dispatch => ({
  createComment: (text, postId) => dispatch(createComment(text, postId)),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  goToLoginPage: () => dispatch(push(routes.login)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)

