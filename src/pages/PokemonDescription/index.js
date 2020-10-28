import React, { useEffect, useState } from 'react';

import PokemonDetail from '../../components/PokemonDetail';

const PokemonDescription = ({ match = '01' }) => {
  const [pokemon, setPokemon] = useState();

  const index = parseInt(match.params.id);
  console.log(index);

  return (
    <>
      <h1>Pokemon Nome</h1>
      <h2>Pokemon Type</h2>
      <p>Pokemon Desc</p>
    </>
  );
};

export default PokemonDescription;
