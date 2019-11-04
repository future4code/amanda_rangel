import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {routes} from '../Router'
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const HomeWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    
    return (
      <HomeWrapper>
        <Button onClick={this.props.goToApplicationForm}>Inscreva-se aqui!</Button>
        <Button onClick={this.props.goToLogin}>Login</Button>
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
