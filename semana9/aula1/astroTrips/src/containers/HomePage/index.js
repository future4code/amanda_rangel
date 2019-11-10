import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from '@material-ui/core/Divider';
import logo2 from "../../images/logo2.png"
import discovery from "../../images/discovery.jpg"
import astronaut from "../../images/astronaut.jpg"
import styled from "styled-components";

const HomeWrapper = styled.div`
 height: 100vh;
 width: 100vw;
`
const ToolbarStyled = styled(Toolbar)`
  background: #050A1B;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`

const Name = styled.img`
  height: 30px;
`

const HomeImg = styled.div`
  width: 100vw;
  height: 60vh;
  background: url(${astronaut}) left center no-repeat;
`

const ApplyButtonStyled = styled(Button)`
  && {
    background-color: #050A1B;
    color: white;
    font-weight: bold;
    width: 20vw;
    height: 50px;
    padding: 1px;
    margin-top: 20px;
    align-self: center;
  }   
  &&:hover {
    background: grey;
  }
`
const LoginButtonStyled = styled(Button)`
  && {
    background-color: white;
    color: #6B6B6B;
    font-weight: bold;
  }   
  &&:hover {
    background: grey;
    color: white;
  }
`

const Aside = styled.aside`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  color: #6B6B6B;
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-between;
  padding: 30px;
  text-align: justify;
  align-self: center;
  overflow: hidden;
`

const Footer = styled.div`
  height: 40px;
  width: 100vw;
  overflow: hidden;
`


class HomePage extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    
    return (
      <HomeWrapper>
        <AppBar position="static">
        <ToolbarStyled>
          <Button onClick={this.props.goToHome}>
            <Name src={logo2} />
          </Button>
          <LoginButtonStyled 
          variant="contained" 
          onClick={this.props.goToLogin}>Login
          </LoginButtonStyled> 
        </ToolbarStyled>
        </AppBar>
          <HomeImg/>
          <Aside>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur. Amet consectetur adipiscing elit duis. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Pellentesque habitant morbi tristique senectus et netus. Purus faucibus ornare suspendisse sed. Iaculis nunc sed augue lacus viverra vitae. Viverra justo nec ultrices dui sapien eget mi proin. Dignissim convallis aenean et tortor at risus.</p>
          <ApplyButtonStyled 
              variant="contained" 
              onClick={this.props.goToApplicationForm}>Inscreva-se aqui!
            </ApplyButtonStyled>
          </Aside>
        <Divider />
        <Footer />
      </HomeWrapper>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    goToApplicationForm: () => dispatch(push(routes.applicationForm)),
    goToLogin: () => dispatch(push(routes.login)),
    goToHome: () => dispatch(push(routes.home)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
