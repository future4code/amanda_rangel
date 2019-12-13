import axios from "axios";

const token = window.localStorage.getItem("token");


export const createNewUser = (email, password, username) => async (dispatch) => {
   
  const data = {
     email: email,
     password: password,
     username: username,
   }

   
  const response = await axios.post (
    "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup", 
    data,
	);
};

export const createPosts = (title,text) => async () => {

    const data = {
        text:text,
        title:title,
    }
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts', data,
		{
			headers: {auth:token}
		}
	)
};
export const createComment = (text, postId) => async () => {

    const data = {
        text:text,
	}
	 await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment`, data,
		{
			headers: {auth:token}
		}
	)
};

export const postVoteUp= (direction, postId) => async () => {
   
    const data = {
        direction: direction,
	}
	await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/vote`, data,

		{
			headers: {auth:token}
		}
	)
};


export const postVoteDown= (direction, postId) => async () => {
    
    const data = {
        direction: direction,
	}
	await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/vote`, data,
		{
			headers: {auth:token}
		}
	)
};


export const postVoteZero= (direction, postId) => async () => {
    
    const data = {
        direction:direction,
	}
	await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/vote`, data,
		{
			headers: {auth:token}
		}
	)
};

export const voteCommentUp= (direction, postId, commentId) => async () => {
    const data = {
        direction,
	}

	await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`, data,
		{
			headers: {auth:token}
		}
		
	)
};

export const voteCommentDown= (direction, postId, commentId) => async () => {
    const data = {
        direction,
    }    
  await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`, data,
		{
			headers: {auth:token}
		}
		
	)
};

export const voteCommentZero= (direction, postId, commentId) => async () => {
    const data = {
        direction,
	  }
	await axios.put (`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`, data,
		{
			headers: {auth:token}
		}
	)
};


export const setPosts = (posts) => ({
  type: "SET_POSTS",
  payload: {
    posts
  }
});

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",
    {
      headers: {
        auth: token,
      }
		});
	dispatch(setPosts(response.data.posts));
};


export const setSelectedPost= (postId) => ({
  type: "SET_SELECTED_POST",
  payload: {
    postId: postId,
  }
});

export const setPostDetails= (postDetails) => ({
  type: "SET_POST_DETAILS",
  payload: {
    postDetails: postDetails,
  }
});

export const getPostDetails = (postId) => async (dispatch, getState) => {
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}`,
    {
      headers: {
        auth: token,
      }
    });
  
  dispatch(setPostDetails(response.data.post));
};



