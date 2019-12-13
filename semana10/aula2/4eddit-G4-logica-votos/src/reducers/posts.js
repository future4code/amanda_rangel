const initialState = {
  posts: [],
  postId: "",
  postDetails: [],

};

const posts = (state = initialState, action) => {
  switch (action.type) {
      case "SET_POSTS":
          return { ...state, posts: action.payload.posts };
      case "SET_SELECTED_POST":
        return {...state, postId: action.payload.postId};
      case "SET_POST_DETAILS":
        return {...state, postDetails: action.payload.postDetails};
      default:
          return state;
  }
};

export default posts;