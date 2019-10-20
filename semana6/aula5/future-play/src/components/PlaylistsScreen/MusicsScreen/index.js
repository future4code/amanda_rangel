import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';


const MusicsScreenContainer = styled.div`
border: 1px gray solid;
width: 50vw;
height: 30vh;
padding: 0;
margin: auto;
display: grid;
grid-gap: 10px;
align-content: center;
justify-items: center;
`
const MusicForm = styled.div`
  display: flex;
  flex-direction: column;
`
const MusicNameLabel = styled.label``
const MusicNameInput = styled.input``
const MusicSingerLabel = styled.label``
const MusicSingerInput = styled.input``
const MusicURLabel = styled.label``
const MusicURLInput = styled.input``
const AddMusicBtn = styled.button``
const MusicsList = styled.div``

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api';

const token = '7ca5e243937cc100696e27893afc7777';



export class MusicsScreen extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      musics: [],
      playlistId: '',
      name: '',
      artist: '',
      url: '',
    }
  }

  componentDidMount () {
      this.setState ({
       playlistId: this.props.playlists
    })
  }


  onChangeMusicNameInputValue = (event) => {
    this.setState ({
      name: event.target.value,
    })
  }

  onChangeSingerNameInputValue = (event) => {
    this.setState ({
      artist: event.target.value,
    })
  }

  onChangeURLInputValue = (event) => {
    this.setState ({
      url: event.target.value,
    })
  }

  addMusicsToPlaylist = async () => {
    const data = {
      playlistId: this.props.playlistId,
      music: {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
      }
    } 
       await axios.put(`${baseURL}/playlists/addMusicToPlaylist`, data, 
    {
      headers: {
        auth: token,
      }
    })
    window.alert('Música adicionada com sucesso!')
  }

//   getPlaylistMusics = async (id) => {
    
//     const response = await axios.get(`${baseURL}/playlists/getPlaylistMusics/string/${id}`, 
//     {
//       headers: {
//         auth: token,
//       }
//     })
//     this.setState({musics: response.data.result.musics}); 
//  }

 render(){
    return(
      <MusicsScreenContainer>
        <MusicForm>
          <MusicNameLabel>Nome da musica</MusicNameLabel>
          <MusicNameInput 
          type='text'
          value={ this.state.name} 
          onChange={this.onChangeMusicNameInputValue}
          />
          <MusicSingerLabel>Artista</MusicSingerLabel>
          <MusicSingerInput 
          type='text'
          value={ this.state.artist} 
          onChange={this.onChangeSingerNameInputValue}
          />
          <MusicURLabel>URL</MusicURLabel>
          <MusicURLInput 
          type='text'
          value={ this.state.url} 
          onChange={this.onChangeURLInputValue}
          />
          <AddMusicBtn onClick={this.addMusicsToPlaylist}>Adicionar</AddMusicBtn>
        </MusicForm>
        <MusicsList>
        {this.state.musics.map((music) => {
          return (
            <li>
              <p>{music.name}</p>
              <p>{music.artist}</p>
            </li>
          )
        })}
        </MusicsList>
      </MusicsScreenContainer>

      
    )
    
  }
}