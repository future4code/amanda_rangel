import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo2 from "../../images/logo2.png"
import logo from "../../images/logo.png"
import astronaut from "../../images/astronaut.jpg"
import styled from "styled-components";

const HomeWrapper = styled.div`
 width: 100vw;
`;
const AppBarStyled = styled(AppBar)`

`

const ToolbarStyled = styled(Toolbar)`
  background-color: #193A4D;
`
const Name = styled.img`
  height: 30px;
`
const Logo = styled.img`
  height: 30px;
`
const HomeImg = styled.img`
  width: 100vw;
  height: 70vh;
`
const ButtonStyled = styled(Button)`
  background-color: #193A4D;
  color: white;
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
          {/* <Logo src={logo} /> */}
        </ToolbarStyled>
        </AppBarStyled>
        <HomeImg src={astronaut} />
        <ButtonStyled 
          variant="contained" 
          onClick={this.props.goToApplicationForm}>Inscreva-se aqui!
        </ButtonStyled>
        <ButtonStyled 
          variant="contained" 
          onClick={this.props.goToLogin}>Login
        </ButtonStyled>
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
