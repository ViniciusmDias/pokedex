import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../store/actions/Pokemons';
import Pokemon from '../../components/Pokemon';
import { List, Options } from './styles';

const ListPokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonsReducer.data);

  useEffect(() => {
    dispatch(actions.getPokemons());
  }, [dispatch]);

  return (
    <List>
      <Options>
        <h1>produtos</h1>
        <span>({pokemons.length} items)</span>
      </Options>
      <ul>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.index} to={`/pokemon/${product.index}`}>
            <Pokemon product={product} />
          </Link>
        ))}
      </ul>
    </List>
  );
};
export default ListPokemons;
