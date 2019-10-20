import React from 'react';
import { OpenningScreen } from './components/OpenningScreen';
import { PlaylistsScreen } from './components/PlaylistsScreen';
import { MusicsScreen } from './components/PlaylistsScreen/MusicsScreen';
import styled from 'styled-components'
import { tsParenthesizedType } from '@babel/types';

const AppContainer = styled.div`
  border: 1px gray solid;
  width: 50vw;
  height: 70vh;
  padding: 0;
  margin: auto;
  display: grid;
  grid-gap: 10px;
  align-content: center;
  justify-items: center;
`
const FuturePlay = styled.h2`
  margin: 0;
  text-align: center;
`

const PlaylistsBtn = styled.button``

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 'oppeningScreen',
      btnText: 'Minhas Playlists',
    }
  }

  onClickBtn = () => {
    if(this.state.currentPage === 'oppeningScreen') {
      this.setState({
        currentPage: 'playlistsScreen',
        btnText: 'Página Inicial'
      })
    } else {
      this.setState ({
        currentPage: 'oppeningScreen',
        btnText: 'Minhas Playlists',
      })
    }
  }

  render() {
    return (
      <AppContainer>
        <FuturePlay>FuturePlay</FuturePlay>
        {
          this.state.currentPage === 'oppeningScreen' ? <OpenningScreen /> : <PlaylistsScreen />
        }
        <PlaylistsBtn onClick = { this.onClickBtn }>{ this.state.btnText }</PlaylistsBtn>
      </AppContainer>
    );
  }
  
}

export default App;
