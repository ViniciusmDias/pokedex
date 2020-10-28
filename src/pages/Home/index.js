import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import PokemonContainer from '../../containers/PokemonContainer';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('').then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  return (
    <>
      <PokemonContainer poke={pokemons} />
    </>
  );
};
export default Home;
