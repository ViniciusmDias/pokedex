import React, { useEffect, useState } from 'react';

import PokemonDetail from '../../components/PokemonDetail';
import WithPokemonLoading from '../../components/WithPokemonLoading';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const PokemonDescription = ({ match = '01' }) => {
  const index = parseInt(match.params.id);

  const PokemonsLoading = WithPokemonLoading(PokemonDetail);

  const [appState, setAppState] = useState({
    loading: false,
    poke: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    fetch(`${apiUrl}/${index}`)
      .then((res) => res.json())
      .then((poke) => {
        setAppState({ loading: false, poke });
      });
  }, [setAppState, index]);

  return (
    <>
      <PokemonsLoading isLoading={appState.loading} pokemon={appState.poke} />
    </>
  );
};

export default PokemonDescription;
