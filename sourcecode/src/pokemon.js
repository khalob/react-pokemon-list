import React, {useState, useEffect} from 'react';
import axios from 'axios';
import uuid from 'react-uuid'
import './local.scss';
import typesKey from './imgs/types-key.png';

const useMountEffect = (fun) => useEffect(fun, []);
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const getUSWeight = (hectograms) => Math.round(hectograms * 0.220462);
const getUSHeight = (decimetres) => {
  const convertedToUS = decimetres * 0.3334;
  const ft = Math.floor(convertedToUS);
  const inches = Math.floor((convertedToUS - ft) * 12);

  return  ft + '\' ' + inches + '"';
};

function PokemonList() {
  const [pokemonEndpoints, setPokemonEndpoints] = useState([]);

  useMountEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
          setPokemonEndpoints(res.data.results.map(d => d.url));
      });
  })

  return (
    <div className="pokemon-list">
      <h1>Pokemon List</h1>
      {pokemonEndpoints.map((pokemonEndpoint) => (
        <PokemonCard endPoint={pokemonEndpoint} key={uuid()} />
      ))}
      <h1>Types</h1>
      <img className="types-key" src={typesKey} alt="Key for pokemon types"/>
    </div>
  );
}

const PokemonCard = ({ endPoint }) => {
  const [pokemon, setPokemon] = useState(null);
  const totalPossiblePokemon = '807';

  const getPokemonData = () => {
    axios.get(endPoint)
    .then((result) => {
      const curPokemon = result.data;
      const maxIndex = curPokemon.moves.length - 1;
      const moveAPIs = [];
      const movesArray = curPokemon.moves;

      // Store move API url
      moveAPIs.push(axios(
        movesArray.splice(getRandomInt(maxIndex), 1)[0].move.url,
      ));

      moveAPIs.push(axios(
        movesArray[getRandomInt(maxIndex - 1)].move.url,
      ));

      // Get move data
      Promise.all(moveAPIs)
      .then((results) => {
        const moves = [];
        results.forEach((result) => {
          moves.push(result.data);
        });

        const types = curPokemon.types.map((item) => {
          return item.type;
        });

        // Push this pokemon
        setPokemon({
          name: curPokemon.name,
          height: getUSHeight(curPokemon.height),
          weight: getUSWeight(curPokemon.weight),
          types: types,
          id: curPokemon.id,
          moves: moves
        });
      });
    })
  };

  useMountEffect(() => {
    if (endPoint) {
      getPokemonData();
    }
  });

  if (!pokemon) {
    return (
    <div className="placeholder">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
    )
  }

  const types = pokemon.types.map((type) => (
    type.name
  ))

  return (
    <div className={'card ' + types.join(' ')}>

        <div className="card-body">
          <div className="card-header">
            <span className="card-title">{pokemon.name}</span>
            <div className="type-list" id="type-list">
              {pokemon.types.map((type, index) => (
                <span className={type.name + '-type type-img'} key={index}></span>
              ))}
            </div>
          </div>

          <div className="hero-bg">
            <img className="hero-image" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={'front view of ' + pokemon.name}/>
          </div>

          <div className="pokestats">{'Length: ' + pokemon.height + ', Weight: ' + pokemon.weight + ' lbs.'}</div>

          {<div className="move-list" id="move-list">
            {pokemon.moves.map((move, index) => (
              <div className="move-container" key={index}>
                <span className={move.type.name + '-type type-img'}></span>
                <span className="move-description">
                  <span className="move-name">{move.name}:</span> {move.flavor_text_entries[2].flavor_text}
                </span>
              </div>
            ))}
          </div>}

          <span className="pokenumber">{pokemon.id + '/' + totalPossiblePokemon}</span>
        </div>

        <div className="card-back"></div>

    </div>
  )
};

export default PokemonList;