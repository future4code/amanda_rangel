import React, {useEffect} from "react";
import {getFeed} from "../../actions/feed";
import VideoCard from "../../components/VideoCard";
import styled from "styled-components";
import { connect } from "react-redux";
import AppBar from "../../components/AppBar";
import Divider from "@material-ui/core/Divider";

const ContainerStyled = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const VideosContainer = styled.div`
  margin-top: 20px;
  @media (min-width: 300px) and (max-width: 500px) {
    display: grid;
    grid-gap: 10px;
    justify-content: center;
  }
  @media (min-width: 500px) and (max-width: 1440px) {
    display: grid;
    grid-template-rows: 2fr 2fr;
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 20px;
    justify-content: center;
  }
`;


const FeedPage = (props) => {


  useEffect(() => {
    props.getFeed();
  });

  return (
    <ContainerStyled>
      <AppBar/>
      <Divider light/>
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
    </ContainerStyled>
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