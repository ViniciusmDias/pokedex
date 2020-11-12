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
    setLoading(true);

    const pokemonTypeFound = pokemonsData.filter((item) =>
      item.types[0].type.name.toLowerCase().includes(value),
    );

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
      <h1>Pokedex</h1>
      <header>
        <input
          type="text"
          placeholder="Procurar pokemon(s) por nome"
          onChange={(e) => {
            searchPokemon(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            searchByType(e.target.value);
          }}
        >
          <option value="">Procurar pokemon(s) por tipo</option>
          <option value="bug">Inseto</option>
          <option value="dragon">Dragão</option>
          <option value="fairy">Fada</option>
          <option value="fire">Fogo</option>
          <option value="ghost">Fantasma</option>
          <option value="ground">Terra</option>
          <option value="normal">Normal</option>
          <option value="pyschic">Psíquico</option>
          <option value="steel">Metal</option>
          <option value="dark">Noturno</option>
          <option value="electric">Elétrico</option>
          <option value="fighting">Lutador</option>
          <option value="flying">Voador</option>
          <option value="grass">Grama</option>
          <option value="ice">Gelo</option>
          <option value="poison">Venenoso</option>
          <option value="rock">Pedra</option>
          <option value="water">Água</option>
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
