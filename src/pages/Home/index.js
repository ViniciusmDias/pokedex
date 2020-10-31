import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import { Container } from './styles';
import { getAllPokemon } from '../../services/api';
import Loading from '../../components/Loading';

const Home = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function loadData() {
      const response = await getAllPokemon(apiUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    loadData();
  }, []);

  const loadingPokemon = async (data) => {
    const pokemon = await Promise.all(
      data.map(async (poke) => {
        const pokemonRecord = await getAllPokemon(poke.url);
        return pokemonRecord;
      }),
    );
    setPokemonsData(pokemon);
  };

  const nextPage = async () => {
    setLoading(true);
    const data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const previousPage = async () => {
    if (!prevUrl) return;
    setLoading(true);
    const data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  return (
    <Container>
      <h1>Pokedex Elysios</h1>
      <header>
        <input type="text" placeholder="Search" />
        <button type="button">Tipo</button>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {pokemonsData.map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <PokemonCard pokemonCard={pokemon} />
            </Link>
          ))}
        </ul>
      )}
      <div>
        <button type="button" onClick={previousPage}>
          Página anterior
        </button>
        <button type="button" onClick={nextPage}>
          Próxima página
        </button>
      </div>
    </Container>
  );
};
export default Home;
