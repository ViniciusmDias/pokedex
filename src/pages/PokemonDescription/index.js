import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actionsPokemons from '../../store/actions/Pokemons';

import PokemonDetail from '../../components/PokemonDetail';

const Pokemon = ({ match = '01' }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonsReducer.data);
  const index = parseInt(match.params.id);

  useEffect(() => {
    dispatch(actionsPokemons.getPokemons());
  }, [dispatch]);

  return (
    <>
      {pokemons.map(
        (pokemon) =>
          pokemon.index === index && (
            <PokemonDetail key={pokemon.index} pokemon={pokemon} />
          ),
      )}
    </>
  );
};

export default Pokemon;
