import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Loading from '../../components/Loading';

import PokemonDescriptionDetail from '../../components/PokemonDescriptionDetail';
import { getPokemon, URL } from '../../services/api';

import { Container } from './styles';

const PokemonDescription = ({ match = '01' }) => {
  const index = parseInt(match.params.id);

  const [loading, setLoading] = useState(true);
  const [pokemonDetailData, setPokemonDetailData] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function loadPoke() {
      const response = await getPokemon(`${URL}/${index}`);
      setPokemonDetailData(response);
      setLoading(false);
    }
    loadPoke();
    setLoading(false);
  }, [index]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link
            className="previous-poke"
            to={`/pokemon/${index === 1 ? index : index - 1}`}
          >
            <AiOutlineArrowLeft />
          </Link>
          <PokemonDescriptionDetail pokemonDetail={pokemonDetailData} />
          <Link className="next-poke" to={`/pokemon/${index + 1}`}>
            <AiOutlineArrowRight />
          </Link>
        </>
      )}
    </Container>
  );
};

export default PokemonDescription;
