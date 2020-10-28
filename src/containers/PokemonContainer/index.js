import React, { useEffect, useState } from 'react';

import withPokemonLoading from '../../components/WithPokemonLoading';
import PokemonCard from '../../components/PokemonCard';
import { List, Options } from './styles';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const PokemonContainer = () => {
  const PokemonsLoading = withPokemonLoading(PokemonCard);

  const [appState, setAppState] = useState({
    loading: false,
    pokes: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch(apiUrl)
      .then((res) => res.json())
      .then((pokes) => {
        setAppState({ loading: false, pokes: pokes.results });
      });
  }, [setAppState]);

  return (
    <List>
      <Options>
        <h1>produtos</h1>
      </Options>
      <ul>
        <PokemonsLoading
          isLoading={appState.loading}
          pokemons={appState.pokes}
        />
      </ul>
    </List>
  );
};
export default PokemonContainer;
