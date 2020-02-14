import {Container, Paper} from "@material-ui/core";
import ReactPlayer from 'react-player'
import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const ReactPlayerStyled = styled(ReactPlayer)`

`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 0;
  width: 90vw;
  height: 55vh;
`;

const TypographyWrapper = styled.div`
  border: solid lightgray;
 `;

const TypographyStyled = styled(Typography)`
  text-align: center;
  font-family: Roboto, sans-serif;
  color: #333;
  padding-top: 5px;
`;

const VideoCard = (props) => {
  return(
    <Container>
          <PlayerWrapper>
            <ReactPlayerStyled
              url={props.videoUrl}
              playing={false}
              width="100%"
              heigth="100%"
              controls={true}
            />
            <TypographyWrapper>
            <TypographyStyled gutterBottom variant="h5" component="h2">
              {props.title}
            </TypographyStyled>
            <TypographyStyled variant="body2" color="textSecondary" component="p">
              {props.description}
            </TypographyStyled>
            </TypographyWrapper>
          </PlayerWrapper>
    </Container>
  )
};

export default VideoCard;