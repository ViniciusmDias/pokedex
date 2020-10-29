import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import {
  Pokemon,
  PokemonHeader,
  PokemonDescription,
  PokemonInfo,
  PokemonImage,
  PokemonStats,
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

  const convertDecimeterToMeter = (value) => value / 10;
  const convertHectogramToKg = (value) => value / 10;

  console.log(pokemon);

  return (
    <Pokemon className="pokemon">
      <PokemonHeader>
        <h2>#00{pokemon.order}</h2>
        <h1>{pokemon.name}</h1>
      </PokemonHeader>
      <PokemonDescription>
        <PokemonInfo>
          <span>Altura: {convertDecimeterToMeter(pokemon.height)}m</span>
          <span>Peso: {convertHectogramToKg(pokemon.weight)}</span>
        </PokemonInfo>
        <PokemonImage>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
        </PokemonImage>
        <PokemonStats>
          <header>
            {pokemonType.map((type) => (
              <img
                src={`${process.env.PUBLIC_URL}/assets/types/${type.name}.png`}
                alt="type"
              />
            ))}
          </header>
          <h3>Estatísticas de base:</h3>
          <ul>
            {pokemonStats.map((stat) => (
              <li>
                <p>
                  {stat.name}: {stat.value}
                </p>
              </li>
            ))}
          </ul>
        </PokemonStats>
      </PokemonDescription>

      <Link to="/" className="link-back">
        <BsArrowLeft size={24} />
        Voltar para a home
      </Link>
    </Pokemon>
  );
};

export default PokemonDetail;
