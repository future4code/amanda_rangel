import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

const PlaylistsScreenContainer = styled.div``
const PlaylistForm = styled.div``
const PlaylistLabel = styled.label``
const PlaylistInput = styled.input``
const PlaylistBtn = styled.button``

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api';

const token = '7ca5e243937cc100696e27893afc7777';

export class PlaylistsScreen extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      playlists: [],
      playlistName: '',
    }
  }

  onChangeInputValue = (event) => {
    this.setState ({
      playlistName: event.target.value,
    })
  }

  createNewPlaylist = async () => {
    
    const data = this.state.playlistName
    
    await axios.post(`${baseURL}/playlists/createPlaylist`, data, 
    {
      headers: {
        auth: `${token}`,
      }
    })
  }

  onClickBtn = () => {
    this.createNewPlaylist();
  }

 
  render(){
    return(
      <PlaylistsScreenContainer>
        <PlaylistForm>
          <PlaylistLabel>Nome: </PlaylistLabel>
          <PlaylistInput value={ this.state.playlistsName} onChange={this.onChangeInputValue}/>
          <PlaylistBtn onClick={ this.onClickBtn}>Criar Playlist</PlaylistBtn>
        </PlaylistForm>
      </PlaylistsScreenContainer>
    )
  }
}