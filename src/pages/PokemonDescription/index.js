import React, { useEffect, useState } from 'react';

import PokemonDescriptionDetail from '../../components/PokemonDescriptionDetail';
import { getPokemon, URL } from '../../services/api';

import { Container } from './styles';

import pokemonTypeColor from '../../helpers/pokemonTypes';

const PokemonDescription = ({ match = '01' }) => {
  const index = parseInt(match.params.id);

  const [loading, setLoading] = useState(true);
  const [pokemonDetailData, setPokemonDetailData] = useState([]);

  useEffect(() => {
    async function loadPoke() {
      const response = await getPokemon(`${URL}/${index}`);
      setPokemonDetailData(response);
      setLoading(false);
    }
    loadPoke();
  }, [index]);

  return (
    <Container>
      <PokemonDescriptionDetail pokemonDetail={pokemonDetailData} />
    </Container>
  );
};

export default PokemonDescription;
