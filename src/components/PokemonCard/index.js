import React, { useEffect, useState } from 'react';
import { Item } from './styles';

const PokemonCard = ({ pokemonCard = [] }) => {
  if (!pokemonCard || pokemonCard.length === 0) {
    return <p>No pokemon today, sorry</p>;
  }
  return (
    <>
      <Item className="item">
        <h3>{pokemonCard.name}</h3>
        <h3>#{pokemonCard.id}</h3>
      </Item>
    </>
  );
};

export default PokemonCard;
