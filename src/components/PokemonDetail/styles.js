import styled from 'styled-components';

export const Pokemon = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 8vh 3vw;

  img {
    min-width: 40%;
    max-height: 500px;
    cursor: pointer;
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }

  .btn-submit {
    min-width: 340px;
    height: 50px;
    padding: 0;
    font-size: 14px;
    border-radius: 2px;
    margin-top: 20px;
    font-weight: 500;
    color: #fff;
    background: var(--primary);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
  .link-back {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 20px;

    &:hover {
      color: rgb(180, 180, 180);
    }
  }

  @media screen and (max-width: 820px) {
    margin: 5px 0px;
    align-items: center;
  }
`;

export const PokemonHeader = styled.header`
  display: flex;
  flex-direction: column;

  h1 {
    color: #ffffff;
    font-size: 35px;
    font-weight: 800;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
  }
  h2 {
    font-size: 20px;
    font-weight: 800;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  }
`;

export const PokemonDescription = styled.div`
  display: flex;
  flex: 1;
  margin: 0 4vw;
  align-items: center;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 17px;
    font-weight: 600;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  }
`;

export const PokemonImage = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export const PokemonStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  article {
    display: flex;
  }
`;
