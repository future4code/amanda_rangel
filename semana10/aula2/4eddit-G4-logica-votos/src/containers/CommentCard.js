import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Divider } from "@material-ui/core";
import { getPostDetails, fetchPosts, voteCommentUp, voteCommentDown, voteCommentZero } from '../actions/allActions'

const CardWrapper = styled.div`
    display: grid;
    justify-content: center;
	`
const CardStyled = styled(Card)` 
    width: 50vw;
    margin-top: 30px;
`
class CommentCard extends React.Component {
	constructor(props) {
		super(props)
	}
		onClickArrowUp = (postId, commentId) => {
			this.props.voteCommentUp(1, postId, commentId);
			this.props.getPostDetails(postId);
		} 
	
		onClickArrowDown = (postId, commentId) => {
			this.props.voteCommentDown(-1, postId, commentId);
			this.props.getPostDetails(postId);
		}
	
	
		onClickCard = (postId, commentId) => {
			this.props.voteCommentZero(0, postId, commentId)
			this.props.getPostDetails(postId);
	}

	render() {
		const { comment } = this.props
		return (
			<CardWrapper>
				<CardStyled >
					<CardHeader
						avatar={
							<Avatar aria-label="Recipe" >
								U
              </Avatar>
						}
						title={comment.username}
					/>
					<Divider />
					<CardContent
						onClick={()=> this.onClickCard(this.props.post.id)}>
						<Typography color="textSecondary" component="p">
							{comment.text}
						</Typography>
					</CardContent>
					<Divider />
					<CardActions>
						<IconButton>
							<ArrowUpwardIcon onClick={() => this.onClickArrowUp(this.props.postId, comment.id)}/>
						</IconButton>
						<Typography> 
							{comment.votesCount}
            </Typography>
						<IconButton>
							<ArrowDownwardIcon 
							onClick={() => this.onClickArrowDown(this.props.postId, comment.id)}/>
						</IconButton>
					</CardActions>
				</CardStyled>
			</CardWrapper>
		)
	}
}

const mapDispatchToProps = dispatch => ({
  voteCommentUp: (direction, postId, commentId) => dispatch(voteCommentUp(direction, postId, commentId)),
  voteCommentDown: (direction, postId, commentId) => dispatch(voteCommentDown(direction, postId, commentId)),
  voteCommentZero: (direction, postId, commentId) => dispatch(voteCommentZero(direction, postId, commentId)),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  fetchPosts: () => dispatch(fetchPosts()),
});
export default connect(
  null,
  mapDispatchToProps
)(CommentCard);