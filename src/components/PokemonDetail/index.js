import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import {
  Pokemon,
  PokemonHeader,
  PokemonDescription,
  PokemonInfo,
} from './styles';

const PokemonDetail = ({ pokemon = {} }) => {
  if (!pokemon || pokemon.length === 0) {
    return <p>No pokemon today, sorry</p>;
  }

  const pokemonStats = pokemon.stats.map((key) => {
    return {
      value: key.base_stat,
      name: key.stat.name,
    };
  });

  const pokemonType = pokemon.types.map((key) => {
    return {
      name: key.type.name,
    };
  });

  console.log(pokemonStats);
  console.log(pokemonType);

  return (
    <Pokemon className="pokemon">
      <PokemonHeader>
        <h2>#00{pokemon.order}</h2>
        <h1>{pokemon.name}</h1>
      </PokemonHeader>
      <PokemonDescription>
        <PokemonInfo>
          <p>{pokemon.weight}</p>
          <p>{pokemon.height}</p>
          <p>POKEMON EVOLUÇÕES</p>
        </PokemonInfo>

        <Link to="/" className="link-back">
          <BsArrowLeft size={24} />
          Voltar para a home
        </Link>
      </PokemonDescription>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt="pokemon"
      />
      {pokemonType.map((type) => (
        <p>{type.name}</p>
      ))}

      {pokemonStats.map((stat) => (
        <div>
          <p>{stat.name}</p>
          <p>{stat.value}</p>
        </div>
      ))}
    </Pokemon>
  );
};

export default PokemonDetail;
