const initialState = {
  videos: [],
};

export const feed = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return ({ ...state, videos: action.payload.videos });
    default:
      return state
  }
};

export default feed;