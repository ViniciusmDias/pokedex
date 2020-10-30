import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styles';

const PokemonCard = ({ pokemonCard = [] }) => {
  const [pokemonUnique, setPokemonUnique] = useState([]);

  useEffect(() => {
    fetch(`${pokemonCard.url}`)
      .then((res) => res.json())
      .then((results) => {
        setPokemonUnique(results);
      });
  }, [pokemonCard]);

  if (!pokemonCard || pokemonCard.length === 0) {
    return <p>No pokemon today, sorry</p>;
  }
  return (
    <>
      <Item className="item">
        <Link to={`/pokemon/${pokemonUnique.id}`}>
          <h3>{pokemonUnique.name}</h3>
          <h3>#{pokemonUnique.id}</h3>
        </Link>
      </Item>
    </>
  );
};

export default PokemonCard;
