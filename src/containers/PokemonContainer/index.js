import React from 'react';
import { Link } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard';
import { List, Options } from './styles';

const PokemonContainer = (pokemons = []) => {
  return (
    <List>
      <Options>
        <h1>produtos</h1>
        <span>({pokemons.length} items)</span>
      </Options>
      <ul>
        {pokemons.poke.map((pokemon, index) => (
          <Link key={pokemon.url} to={`/pokemon/${index + 1}`}>
            <PokemonCard pokemon={pokemon} index={index + 1} />
          </Link>
        ))}
      </ul>
    </List>
  );
};
export default PokemonContainer;
