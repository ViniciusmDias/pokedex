import React, { useCallback, useEffect, useState } from 'react';

import api from 'axios';
import withPokemonLoading from '../../components/WithPokemonLoading';
import PokemonCard from '../../components/PokemonCard';
import { Container } from './styles';

const PokemonContainer = () => {
  const PokemonsLoading = withPokemonLoading(PokemonCard);

  const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [pokemons, setPokemons] = useState([]);
  const [appState, setAppState] = useState({
    loading: false,
  });

  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    async function loadPokes() {
      setAppState({ loading: true });

      const res = await api.get(apiUrl);
      setPokemons(res.data.results);
      setNextPage(res.data.next);
      setAppState({ loading: false });
    }

    loadPokes();
  }, [apiUrl]);

  function handleClick(e) {
    e.preventDefault();
    setApiUrl(nextPage);
  }

  return (
    <Container>
      <h1>Pokedex Elysios</h1>
      <header>
        <input type="text" />
        <button type="button">Tipo</button>
      </header>
      <ul>
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonsLoading
              isLoading={appState.loading}
              pokemonCard={pokemon}
              index={index}
              key={pokemon.name}
            />
          );
        })}
      </ul>
      <button type="button" onClick={(e) => handleClick(e)}>
        Mais Pokemons
      </button>
    </Container>
  );
};
export default PokemonContainer;
