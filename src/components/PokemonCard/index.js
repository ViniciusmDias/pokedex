import React from 'react';
import { Item, Image, Description } from './styles';

const Product = ({ pokemon = {} }) => {
  return (
    <Item key={pokemon.index} className="item">
      <Image>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${
            pokemon.index + 1
          }.png`}
          alt={pokemon.name}
        />
        {pokemon.on_sale && <div>{pokemon.discount_percentage} off</div>}

        <button type="button">Ver pokemon</button>
      </Image>

      <Description>
        <h3>{pokemon.name}</h3>

        {pokemon.on_sale && <span>R${pokemon.regular_price}</span>}

        <strong>R${pokemon.actual_price}</strong>
      </Description>
    </Item>
  );
};

export default Product;
