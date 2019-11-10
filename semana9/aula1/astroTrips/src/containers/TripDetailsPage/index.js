import React, { Component } from "react";
import { routes } from "../Router"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider"
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import styled from "styled-components";
import { getTripDetails, selectCandidate } from "../../actions/trips";
import { ListItem, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo2 from "../../images/logo2.png"


const TripDetailsWrapper = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
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

const ListStyled = styled(List)`
  border: 1px solid #9B9E9E;
  height: 45vh;
  width: 40vw;
  color: #333;
`

const ListItemStyled = styled(ListItem)`
  &&:hover {
    background-color: #9B9E9E;
    color: white;
  }
  display: flex;
`

const Candidates = styled.div`
  display:grid;
  justify-items: center;
`
const Trips = styled.div`
  display:grid;
  justify-items: center;
`
const Title = styled.div`
  text-align: center;
  color: #333;
`
const IconButtonStyled = styled(IconButton)`
  padding-left: 20px;
`


class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    
  }

 componentDidMount() {
   this.props.getTripDetails(this.props.tripId);
   const token = window.localStorage.getItem("token");
 
   if (!token) {
     this.props.goToLogin();
  }
 }

 onClickAprove = (candidateId) => {
  this.props.selectCandidate(this.props.tripId.id, candidateId, true);
 }
 onClickReprove = (candidateId) => {
  this.props.selectCandidate(this.props.tripId.id, candidateId, false);
 }

  render() {
    const tripId = this.props.tripId;
    return (
      <TripDetailsWrapper>
        <AppBar position="static">
          <ToolbarStyled>
            <Button onClick={this.props.goToHome}>
              <Name src={logo2} />
            </Button>
          </ToolbarStyled>
        </AppBar>
        <Trips>
        <Title>
          <h3>Viagens</h3>
        </Title>
        <ListStyled>
          <ListItemStyled>
            Nome: {tripId.name}
          </ListItemStyled>
          <Divider />
          <ListItemStyled>
            Planeta: {tripId.planet}
          </ListItemStyled>
          <Divider />
          <ListItemStyled>
            Duração: {tripId.durationInDays}
          </ListItemStyled>
          <Divider />
          <ListItemStyled>
            Descrição: {tripId.description}
          </ListItemStyled>
        </ListStyled>
        </Trips>
        <Candidates>
        <Title>
          <h3>Candidatos</h3>
        </Title>
        {tripId.candidates !== undefined &&
          tripId.candidates.map(candidate => (
            <ListStyled>
              <ListItemStyled>
                Nome: {candidate.name}
                <IconButtonStyled>
                <DoneIcon onClick={ () => this.onClickAprove(candidate.id)}/>
              </IconButtonStyled>
              <IconButtonStyled>
                <ClearIcon onClick={() => this.onClickReprove(candidate.id)}/> 
              </IconButtonStyled>
              </ListItemStyled>
              <Divider />
              <ListItemStyled>
                País: {candidate.country}
              </ListItemStyled>
              <Divider />
              <ListItemStyled>
                Texto: {candidate.applicationText}
              </ListItemStyled>
              <Divider />
              <ListItemStyled>
                Profissão: {candidate.profession}
              </ListItemStyled>
              <Divider />
              <ListItemStyled>
                Idade: {candidate.age}
              </ListItemStyled>
            </ListStyled>
          ))}
        </Candidates>   
      </TripDetailsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  tripId: state.trips.tripId
});


function mapDispatchToProps(dispatch) {
  return {
    getTripDetails: (tripId) => dispatch(getTripDetails(tripId)),
    goToLogin: () => dispatch(push(routes.login)),
    selectCandidate: (tripId, candidateId, approve) => dispatch(selectCandidate(tripId, candidateId, approve)),
    goToHome: () => dispatch(push(routes.home)),
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDetailsPage);
