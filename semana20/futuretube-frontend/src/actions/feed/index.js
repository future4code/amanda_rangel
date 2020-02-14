import axios from "axios"

const baseUrl = "https://us-central1-futuretube.cloudfunctions.net/app";

export const setVideos = (videos) => {
  return ({
    type: "SET_VIDEOS",
    payload: {videos}
  })
};

export const getFeed = (page = 1) => async dispatch => {
  const response = await axios.get(`${baseUrl}/getAllVideos`, {params: {page}});
  dispatch(setVideos(response.data.videos));
};

