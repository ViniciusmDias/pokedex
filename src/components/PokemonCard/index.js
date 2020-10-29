import React from 'react';
import { Item, Image, Description } from './styles';

const PokemonCard = ({ pokemons = [] }) => {
  if (!pokemons || pokemons.length === 0) {
    return <p>No pokemons today, sorry</p>;
  }

  return (
    <>
      {pokemons.map((poke, index) => {
        return (
          <Item key={poke.url} to={`/pokemon/${index + 1}`} className="item">
            <Image>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${
                  index + 1
                }.png`}
                alt={poke.name}
              />

              <button type="button">Ver pokemon</button>
            </Image>

            <Description>
              <h3>{poke.name}</h3>
            </Description>
          </Item>
        );
      })}
    </>
  );
};

export default PokemonCard;
