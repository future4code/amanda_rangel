import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const PlayerWrapper = styled.div`
   width: 85%;
   align-self: center;
   
`;

const TypographyWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  padding: 10px 0 20px 10px;
 `;

const TypographyStyled = styled(Typography)`
  text-align: center;
  font-family: Roboto, sans-serif;

  color: #333;
  padding-left: 20px;
`;

const VideoCard = (props) => {
  return(
    <ContainerStyled>
          <PlayerWrapper>
            <video
              src={props.videoUrl}
              width="100%"
              controls
            />
            <TypographyWrapper>
              <Avatar alt="Foto Usuário" src="/static/images/avatar/1.jpg" />
              <div>
                <TypographyStyled>
                  {props.title}
                </TypographyStyled>
              </div>
            </TypographyWrapper>
            <Divider />
          </PlayerWrapper>
    </ContainerStyled>
  )
};

export default VideoCard;