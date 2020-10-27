import React, { useEffect, useState } from 'react';
import api from 'axios';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    api.get(URL).then((response) => {
      setPokemons(response.data.results);

      console.log(response.data.results);
    });
  }, []);

  return <div />;
};
export default Home;
