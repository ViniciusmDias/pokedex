import React, { useEffect, useState } from 'react';

import PokemonDescriptionDetail from '../../components/PokemonDescriptionDetail';
import WithPokemonLoading from '../../components/WithPokemonLoading';

import { Container } from './styles';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const PokemonDescription = ({ match = '01' }) => {
  const index = parseInt(match.params.id);

  const PokemonsLoading = WithPokemonLoading(PokemonDescriptionDetail);

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
    <Container>
      <PokemonsLoading
        isLoading={appState.loading}
        pokemonDetail={appState.poke}
      />
    </Container>
  );
};

export default PokemonDescription;
