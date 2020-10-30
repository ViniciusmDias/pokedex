import React, { useCallback, useEffect, useState } from 'react';

import api from 'axios';
import withPokemonLoading from '../../components/WithPokemonLoading';
import PokemonCard from '../../components/PokemonCard';
import { Container } from './styles';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const PokemonContainer = () => {
  const PokemonsLoading = withPokemonLoading(PokemonCard);

  const [pokemons, setPokemons] = useState([]);
  const [appState, setAppState] = useState({
    loading: false,
  });

  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    setAppState({ loading: true });

    api.get(apiUrl).then((res) => {
      setPokemons(res.data.results);
      setNextPage(res.data.next);
      setAppState({ loading: false });
    });
  }, []);

  async function loadNextPokes(e) {
    e.preventDefault();
    setAppState({ loading: true });
    const res = await api.get(nextPage);
    setPokemons(res.data.results);
    setNextPage(res.data.next);
    setAppState({ loading: false });
  }

  return (
    <Container>
      <h1>Pokedex Elysios</h1>
      <header>
        <input type="text" placeholder="Search" />
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
      <button type="button" onClick={(e) => loadNextPokes(e)}>
        Próxima página
      </button>
    </Container>
  );
};
export default PokemonContainer;
