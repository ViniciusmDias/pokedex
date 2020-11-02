/* eslint-disable indent */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard';
import { Container } from './styles';
import { getAllPokemon, getPokemon, URL } from '../../services/api';
import Loading from '../../components/Loading';

const Home = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [pokemonFiltered, setPokemonFiltered] = useState([]);
  const [searchFound, setSearchFound] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadData() {
      const response = await getAllPokemon(URL);
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
        const pokemonRecord = await getPokemon(poke.url);
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

  const searchPokemon = (value) => {
    setLoading(true);

    const pokemonFound = pokemonsData.filter((item) =>
      item.name.toLowerCase().includes(value),
    );

    if (pokemonFound) {
      setPokemonFiltered(pokemonFound);
      setSearchFound(true);
    } else {
      setSearchFound(false);
    }

    setLoading(false);
  };

  /*
  (this function will be implemented)
  const searchByType = () => {
    setLoading(true);

    const pokemonTypeFound = pokemonsData.filter((item) =>
      item.types.map((type) =>
        type.type.name.toLowerCase().includes(typeFilter),
      ),
    );

    if (pokemonTypeFound) {
      setPokemonFiltered(pokemonTypeFound);
      setSearchFound(true);
    } else {
      setSearchFound(false);
    }

    setLoading(false);
  }; */

  return (
    <Container>
      <h1>Pokedex Elysios</h1>
      <header>
        <input
          type="text"
          placeholder="Procurar um pokemon por nome"
          onChange={(e) => {
            searchPokemon(e.target.value);
          }}
        />
        <select>
          <option value="">
            Procurar um pokemon por tipo (será implementado)
          </option>
          <option value="bug">Bug</option>
          <option value="dragon">Dragon</option>
          <option value="fairy">Fairy</option>
          <option value="fire">Fire</option>
          <option value="ghost">Ghost</option>
          <option value="ground">Ground</option>
          <option value="normal">Normal</option>
          <option value="pyschic">Pyschic</option>
          <option value="steel">Steel</option>
          <option value="dark">Dark</option>
          <option value="electric">Electric</option>
          <option value="fighting">Fighting</option>
          <option value="electric">Electric</option>
          <option value="flying">Flying</option>
          <option value="grass">Grass</option>
          <option value="ice">Ice</option>
          <option value="poison">Poison</option>
          <option value="rock">Rock</option>
          <option value="water">Water</option>
        </select>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {searchFound
            ? pokemonFiltered.map((pokemon) => (
                <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                  <PokemonCard pokemonCard={pokemon} />
                </Link>
              ))
            : pokemonsData.map((pokemon) => (
                <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                  <PokemonCard pokemonCard={pokemon} />
                </Link>
              ))}
        </ul>
      )}
      <footer>
        <button type="button" onClick={previousPage}>
          Página anterior
        </button>
        <button type="button" onClick={nextPage}>
          Próxima página
        </button>
      </footer>
    </Container>
  );
};
export default Home;
