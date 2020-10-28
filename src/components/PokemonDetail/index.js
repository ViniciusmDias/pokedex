import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { Pokemon, PokemonGroup, PokemonInfo, InfoPrice } from './styles';

const PokemonDetail = ({ pokemon = {} }) => {
  return (
    <Pokemon className="pokemon">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${
          pokemon.index + 1
        }.png`}
        alt="pokemon"
      />

      <PokemonGroup>
        <PokemonInfo>
          <h3>{pokemon.name}</h3>
          <InfoPrice>
            {pokemon.on_sale && <span>R$ {pokemon.regular_price}</span>}
            <strong>R${pokemon.actual_price}</strong>
            <br />
            <span className="installments">Em até {pokemon.installments}x</span>
          </InfoPrice>
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
