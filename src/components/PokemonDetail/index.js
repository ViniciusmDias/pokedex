import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { Pokemon, PokemonGroup, PokemonInfo } from './styles';

const PokemonDetail = ({ pokemon = {} }) => {
  if (!pokemon || pokemon.length === 0) {
    return <p>No pokemon today, sorry</p>;
  }
  console.log(pokemon);

  return (
    <Pokemon className="pokemon">
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemon"
      />

      <PokemonGroup>
        <PokemonInfo>
          <h3>{pokemon.name}</h3>
          <p>{pokemon.weight}</p>
          <p>{pokemon.height}</p>
          <p>POKEMON TIPOS</p>
          <p>POKEMON EVOLUÇÕES</p>
        </PokemonInfo>

        <Link to="/" className="link-back">
          <BsArrowLeft size={24} />
          Voltar para a home
        </Link>
      </PokemonGroup>
    </Pokemon>
  );
};

export default PokemonDetail;
