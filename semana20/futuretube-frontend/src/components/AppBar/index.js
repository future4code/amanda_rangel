import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import futureTube2 from "../../img/futureTube2.png";
import MenuIcon from '@material-ui/icons/Menu';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Logo = styled.img`
  width: 130px;
  height: 55px;
  margin-left: 10px;  
`;

const MenuTwoToneIconStyled = styled(MenuTwoToneIcon)`
  padding-bottom: 2px;
  margin-left: 10px;
`;

const MenuLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const LoginButton = styled(Button)`
  &&& {
    margin-right: 20px;  
    color: white;
    height: 35px;
  }
`;

const AppBar = (props) => {
  return (
    <Container>
      <MenuLogoWrapper>
        <MenuTwoToneIconStyled fontSize="large"/>
        <Logo src={futureTube2}/>
      </MenuLogoWrapper>
      <LoginButton variant="contained" color="primary" disableElevation>Login</LoginButton>
    </Container>
  )
};

export default AppBar;