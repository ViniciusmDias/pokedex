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
  // (this function will be implemented)
  const searchByType = (value) => {
    console.log(value);
    setLoading(true);

    const pokemonTypeFound = pokemonsData.filter((item) =>
      item.types[0].type.name.toLowerCase().includes(value),
    );

    console.log(pokemonTypeFound);

    if (pokemonTypeFound) {
      setPokemonFiltered(pokemonTypeFound);
      setSearchFound(true);
    } else {
      setSearchFound(false);
    }

    setLoading(false);
  };

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
        <select
          onChange={(e) => {
            searchByType(e.target.value);
          }}
        >
          <option value="">Procurar um pokemon por tipo</option>
          <option value="bug">Bug</option>
          <option value="dragon">dragon</option>
          <option value="fairy">fairy</option>
          <option value="fire">fire</option>
          <option value="ghost">ghost</option>
          <option value="ground">ground</option>
          <option value="normal">normal</option>
          <option value="pyschic">pyschic</option>
          <option value="steel">steel</option>
          <option value="dark">dark</option>
          <option value="electric">electric</option>
          <option value="fighting">fighting</option>
          <option value="electric">electric</option>
          <option value="flying">flying</option>
          <option value="grass">grass</option>
          <option value="ice">ice</option>
          <option value="poison">poison</option>
          <option value="rock">rock</option>
          <option value="water">water</option>
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
        <p>
          © 2020 Desafio Frontend Elysios | Por:
          <a href="https://viniciusdias.works"> Vinicius Dias</a>
        </p>
      </footer>
    </Container>
  );
};
export default Home;
