import React, {useEffect, useState} from "react";
import {getFeed, setVideos} from "../../actions/feed";
import {Container} from "@material-ui/core";
import VideoCard from "../../components/VideoCard";
import styled from "styled-components";
import { connect } from "react-redux";

const VideosContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 10px;
`;

const FeedPage = (props) => {


  useEffect(() => {
    props.getFeed();
  },[]);

  return (
    <Container>
      <VideosContainer>
        {props.videos.map(video => (<VideoCard
                                videoUrl={video.videoUrl}
                                title={video.title}
                                userId={video.userId}
                                videoId={video.videoId}
                                description={video.description}
                                />
        ))}

      </VideosContainer>
    </Container>
  )
};

const mapStateToProps = state =>{
  return({
    videos: state.feed.videos,
    // restaurantId: state.restaurant.restaurantId,
  })
};


const mapDispatchToProps = dispatch => ({
  getFeed: () => dispatch(getFeed())
  // setVideos: (videos) => dispatch(setVideos(videos))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);