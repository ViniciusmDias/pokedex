import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import pokemonTypeColor from '../../helpers/pokemonTypes';

import {
  Pokemon,
  PokemonHeader,
  PokemonDescription,
  PokemonInfo,
  PokemonImage,
  PokemonStats,
} from './styles';

const PokemonDescriptionDetail = ({ pokemonDetail = {} }) => {
  if (!pokemonDetail || pokemonDetail.length === 0) {
    return <p>No pokemon today, sorry</p>;
  }

  const pokemonStats = pokemonDetail.stats.map((stat) => {
    return {
      value: stat.base_stat,
      name: stat.stat.name,
    };
  });

  const pokemonTypes = pokemonDetail.types.map((type) => {
    return {
      name: type.type.name,
    };
  });

  const convertDecimeterToMeter = (value) => value / 10;
  const convertHectogramToKg = (value) => value / 10;

  console.log(pokemonTypes.name);

  return (
    <Pokemon className="pokemon">
      <PokemonHeader>
        <h2>#{pokemonDetail.id}</h2>
        <h1>{pokemonDetail.name}</h1>
      </PokemonHeader>
      <PokemonDescription>
        <PokemonInfo>
          <span>Altura: {convertDecimeterToMeter(pokemonDetail.height)}m</span>
          <span>Peso: {convertHectogramToKg(pokemonDetail.weight)}kg</span>
        </PokemonInfo>
        <PokemonImage>
          <img
            src={pokemonDetail.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
        </PokemonImage>
        <PokemonStats>
          <header>
            {pokemonTypes.map((pokemonType) => (
              <img
                key={pokemonType.name}
                src={`${process.env.PUBLIC_URL}/assets/types/${pokemonType.name}.png`}
                alt="type"
              />
            ))}
          </header>
          <h3>Estatísticas de base:</h3>
          <ul>
            {pokemonStats.map((pokemonStat) => (
              <li key={pokemonStat.name}>
                <p>
                  {pokemonStat.name}: {pokemonStat.value}
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

export default PokemonDescriptionDetail;
