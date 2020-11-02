import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import {
  pokemonTypeColor,
  pokemonStatsTranslate,
  pokemonTypeTranslate,
} from '../../helpers/pokemonHelpers';

import {
  Pokemon,
  PokemonHeader,
  PokemonDescription,
  PokemonInfo,
  PokemonImage,
  PokemonStats,
} from './styles';

const PokemonDescriptionDetail = ({
  pokemonDetail = {
    id: 111,
    name: '',
    length: undefined,
    stats: [],
    types: [],
    height: 0,
    weigth: 0,
    sprites: [],
  },
}) => {
  if (!pokemonDetail || pokemonDetail.length === 0) {
    return <p>No pokemon today, sorry</p>;
  }
  console.log(pokemonDetail);
  const pokemonStats = pokemonDetail.stats.map((stat) => {
    return {
      value: stat.base_stat,
      name: pokemonStatsTranslate[stat.stat.name],
    };
  });

  const pokemonTypes = pokemonDetail.types.map((type) => {
    return {
      name: type.type.name,
    };
  });

  const convertDecimeterToMeter = (value) => value / 10;
  const convertHectogramToKg = (value) => value / 10;

  return (
    <Pokemon
      className="pokemon"
      style={{ backgroundColor: pokemonTypeColor[pokemonTypes[0].name] }}
    >
      <PokemonHeader>
        <h2>#{pokemonDetail.id}</h2>
        <h1>{pokemonDetail.name}</h1>
      </PokemonHeader>
      <PokemonDescription>
        <PokemonInfo>
          <h3>Detalhes:</h3>
          <article>
            <p>Altura: {convertDecimeterToMeter(pokemonDetail.height)}m</p>
            <p>Peso: {convertHectogramToKg(pokemonDetail.weight)}kg</p>
          </article>
        </PokemonInfo>
        <PokemonImage>
          <img
            src={pokemonDetail.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
        </PokemonImage>
        <PokemonStats>
          <section>
            <h3>Tipos:</h3>
            <div>
              {pokemonTypes.map((pokemonType) => (
                <article key={pokemonType.name}>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/types/${pokemonType.name}.png`}
                    alt="type"
                  />
                  <p>{pokemonTypeTranslate[pokemonType.name]}</p>
                </article>
              ))}
            </div>
          </section>
          <section>
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
          </section>
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
