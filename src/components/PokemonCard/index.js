import React from 'react';
import { Item, Image, Description } from './styles';

const PokemonCard = ({ pokemon = [], index = 0 }) => {
  console.log(pokemon);
  return (
    <Item className="item">
      <Image>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`}
          alt={pokemon.name}
        />

        <button type="button">Ver pokemon</button>
      </Image>

      <Description>
        <h3>{pokemon.name}</h3>
      </Description>
    </Item>
  );
};

export default PokemonCard;
