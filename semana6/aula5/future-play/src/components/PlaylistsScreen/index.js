import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { MusicsScreen } from './MusicsScreen';

const PlaylistsScreenContainer = styled.div``
const PlaylistForm = styled.div`
  display: flex;
  justify-contents: space-evenly;
`
const PlaylistLabel = styled.label``
const PlaylistInput = styled.input``
const PlaylistBtn = styled.button``

const AllPlaylists = styled.ul`
  list-style: none;  
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  padding-top: 20px;
`
const DetailsBtn = styled.button``

const DeleteBtn = styled.button`
  background: none;
  border: none;
`

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api';

const token = '7ca5e243937cc100696e27893afc7777';

export class PlaylistsScreen extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      playlists: [],
      playlistName: '',
      isMusicsScreenVisible: false
      
    }
  }

  onChangeInputValue = (event) => {
    this.setState ({
      playlistName: event.target.value,
    })
  }

  createNewPlaylist = async () => {
    
    const data = {
      name: this.state.playlistName
    } 
    
    await axios.post(`${baseURL}/playlists/createPlaylist`, data, 
    {
      headers: {
        auth: token,
      }
    })
    window.alert('Playlist criada com sucesso!')
  }

  onClickBtn = () => {
    this.createNewPlaylist();
  }

  getAllPlaylists = async () => {
    const response = await axios.get(`${baseURL}/playlists/getAllPlaylists`, 
    {
      headers: {
        auth: token,
      }
    })
    this.setState({playlists: response.data.result.list}); 
 }

  componentDidMount(){
    this.getAllPlaylists();
  }

  
  

  onClickDeleteBtn = async (id) => {
    await axios
      .delete(`${baseURL}/playlists/deletePlaylist?playlistId=${id}`, 
      {
        headers: {
          auth: token,
        }
      })
  }

  toggleMusicsScreenVisibility = () => {
    this.setState({
      isMusicsScreenVisible: !this.state.isMusicsScreenVisible,
    })
  }

    
  render(){
    return(
      <PlaylistsScreenContainer>
        <PlaylistForm>
          <PlaylistLabel>Nova playlist: </PlaylistLabel>
          <PlaylistInput 
          type='text' 
          value={ this.state.playlistsName} 
          onChange={this.onChangeInputValue}
          />
          <PlaylistBtn onClick={ this.onClickBtn}>Criar Playlist</PlaylistBtn>
        </PlaylistForm>
        {this.state.playlists.map((playlist, i) => {
          return (
            <AllPlaylists>
              <DetailsBtn onClick={this.toggleMusicsScreenVisibility}>Details</DetailsBtn>
              <li>{playlist.name}</li>
              <DeleteBtn onClick = { () => {this.onClickDeleteBtn(playlist.id)} }>X</DeleteBtn>
            </AllPlaylists>
          )
        })}
        {this.state.isMusicsScreenVisible && (
          <MusicsScreen playlists={this.state.playlists.id}/>
        )}
        
      </PlaylistsScreenContainer>
    )
  }
}