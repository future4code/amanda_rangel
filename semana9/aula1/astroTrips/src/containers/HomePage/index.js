import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo2 from "../../images/logo2.png"
import discovery from "../../images/discovery.jpg"
import astronaut from "../../images/astronaut.jpg"
import styled from "styled-components";

const HomeWrapper = styled.div`
 height: 100vh;
 width: 100vw;
 overflow: hidden;
`;
const AppBarStyled = styled(AppBar)`

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

const HomeImg = styled.img`
  width: 100vw;
  height: 50vh;
`
const ApplyButtonStyled = styled(Button)`
  && {
    background-color: white;
    color: #D25934;
    font-weight: bold;
    width: 20vw;
    height: 50px;
    padding: 1px;
    margin-top: 20px;
  }   
`
const LoginButtonStyled = styled(Button)`
  && {
    background-color: white;
    color: #D25934;
    font-weight: bold;
  }   
`

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardStyled = styled(Card)`
  height: 40vh;
  width: 100vw;
  && {
  background: #D34D02;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  }
  padding-right: 20px;
 `
const TypographyStyled = styled(Typography)`
  && {
    color: white;
    font-size: 18px;
    text-align: left;
    font-family: sans-serif;
    width: 45vw;
  }
`

const CardMediaStyled = styled(CardMedia)`
  && {
    height: 150px;
    width: 20vw;
    border-radius: 10px;
  }  
`


class HomePage extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    
    return (
      <HomeWrapper>
        <AppBarStyled position="static">
        <ToolbarStyled>
          <Name src={logo2} />
          <LoginButtonStyled 
          variant="contained" 
          onClick={this.props.goToLogin}>Login
          </LoginButtonStyled> 
        </ToolbarStyled>
        </AppBarStyled>
        <PageBody>
        <HomeImg src={astronaut} />
        <CardStyled>
          <CardContent>
            <TypographyStyled 
            gutterBottom 
            variant="h5" 
            component="h2"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </TypographyStyled>
          </CardContent>
          <div>
          <CardMediaStyled
            image={discovery}
            title="Contemplative Reptile"
          />
          
        <ApplyButtonStyled 
          variant="contained" 
          onClick={this.props.goToApplicationForm}>Inscreva-se aqui!
        </ApplyButtonStyled>
        </div>
        </CardStyled>

       </PageBody>
        </HomeWrapper>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    goToApplicationForm: () => dispatch(push(routes.applicationForm)),
    goToLogin: () => dispatch(push(routes.login)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
