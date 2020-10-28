import React from 'react';

import PokemonDetail from '../../components/PokemonDetail';

const PokemonDescription = ({ match = '01' }) => {
  const index = parseInt(match.params.id);

  return (
    <>
      <PokemonDetail index={index} />
    </>
  );
};

export default PokemonDescription;
