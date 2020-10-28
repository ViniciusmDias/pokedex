import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { Pokemon, PokemonGroup, PokemonInfo } from './styles';
import api from '../../services/api';

const PokemonDetail = ({ index = 0 }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    api.get(`/${index}`).then((response) => {
      setPokemon(response.data);
      console.log(response.data);
    });
  }, [index]);

  console.log(index);
  console.log(pokemon);
  return (
    <Pokemon className="pokemon">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${index}.png`}
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
