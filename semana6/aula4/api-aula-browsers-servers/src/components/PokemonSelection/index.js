import React from "react";
import axios from "axios";
import styled from "styled-components";
import jigglypuff from "/home/amanda/Desktop/ProjetosF4/amanda_rangel/semana6/aula4/api-aula-browsers-servers/src/components/imagens/jigglypuff.png"
import pikachu from "/home/amanda/Desktop/ProjetosF4/amanda_rangel/semana6/aula4/api-aula-browsers-servers/src/components/imagens/pikachu.png"
import header from "/home/amanda/Desktop/ProjetosF4/amanda_rangel/semana6/aula4/api-aula-browsers-servers/src/components/imagens/header.png"

const PokeContainer = styled.div`
  font-family: sans-serif;
  color: #333;
  width: 40vw;
  height: 60vh;
  margin: auto;
  background-color: lightblue;
  display: grid;
`

const PokeImg = styled.img`
  width: 30vw;
  height: 40vh;
  padding-bottom: 20px;
  margin-left: 30px;
`

const PokeWrap = styled.div`
  display: grid;
  justify-content: center;
  background-color: lightgreen;
  padding: 10px;
`

const PikachuImg = styled.img`
  width: 60px;
  padding: 5px;
`


const SelectFavPoke = styled.select`
  background-color: yellow;
  border-radius: 20px;
  border: none;
  padding: 10px;
  font-family: sans-serif;
  color: #333;
  opacity: 0.85;
  margin: 10px

`
const PokeColorBtn = styled.button`
  background-color: pink;
  border-radius: 20px;
  border: none;
  padding: 10px;
  font-family: sans-serif;
  color: #333;
  opacity: 0.85;
  margin-right: 30px;
  width: 200px;
`

const JigglypuffImg = styled.img`
  width: 60px;
  margin-top: 20px;
  padding: 0 10px;

`
const PokeColorResult = styled.div`
  background-color: yellow;
  opacity: 0.7;
  padding: 10px;
  font-weight: bold;
  text-align: center;
`


class PokemonSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      currentSelectedPokemon: "",
      currentSelectedPokemonColor: [],
    }
  }

  componentDidMount() {
    this.getSeveralPokemons();
  }


  getSeveralPokemons = async () => {
    const pokelist = await axios
      .get("https://pokeapi.co/api/v2/pokemon", {
        params: {
          limit: 200
        }
      })
    this.setState({ pokemons: pokelist.data.results });
  }

  getCurrentPokemonColor = async () => {
    const selectedPokeName = this.state.currentSelectedPokemon
    const pokeColor = await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokeName}`)
    this.setState({ currentSelectedPokemonColor: pokeColor.data.color })

  }


  handlePokemonSelection = (event) => {
    const selectedValue = event.target.value;
    this.setState({ currentSelectedPokemon: selectedValue });
  }

  onclickBtn = () => {
    this.getCurrentPokemonColor();
  }


  render() {

    return (
      <PokeContainer>
        <PokeImg src={header} />
        <PokeWrap>
          <div>
            <SelectFavPoke
              onChange={this.handlePokemonSelection}
              value={this.state.currentSelectedPokemon}
            >
              <option>Selecione um Pokemon</option>
              {this.state.pokemons.map((pokemon) => {
                return (
                  <option
                    value={pokemon.name}
                  >
                    {pokemon.name}
                  </option>)
              })}
            </SelectFavPoke>
            <PikachuImg src={pikachu} />
            </div>
            <div>  
              <JigglypuffImg src={jigglypuff} />  
              <PokeColorBtn onClick={this.onclickBtn}>Clique aqui!</PokeColorBtn>
            </div>
        </PokeWrap>
          <PokeColorResult key={this.state.currentSelectedPokemonColor.name}> 
            <p>A cor do Pokémon é: </p> 
            {this.state.currentSelectedPokemonColor.name}
          </PokeColorResult>
        </PokeContainer>
    )

  }
}

export default PokemonSelection;