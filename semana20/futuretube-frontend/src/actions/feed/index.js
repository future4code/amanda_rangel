import axios from "axios"

const baseUrl = "https://us-central1-futuretube.cloudfunctions.net/app";

export const setVideos = (videos) => {
  return ({
    type: "SET_VIDEOS",
    payload: {videos}
  })
};
export const setVideosDetails = (videosDetails) => {
  return ({
    type: "SET_VIDEOS_DETAILS",
    payload: {videosDetails}
  })
};

export const getFeed = (page = 1) => async dispatch => {
  const response = await axios.get(`${baseUrl}/getAllVideos`, {params: {page}});
  dispatch(setVideos(response.data.videos));
};

export const getVideosDetails = (page = 1) => async dispatch => {
  const response = await axios.get(`${baseUrl}/getVideosDetails`, {params: {page}});
  dispatch(setVideos(response.data.videos));
};

