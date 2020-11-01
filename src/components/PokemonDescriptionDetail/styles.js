import styled from 'styled-components';

export const Pokemon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .link-back {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    max-width: 225px;
    background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 13px;
    padding-right: 13px;
    margin-top: 0;
    margin-bottom: 14px;
    margin-right: 10px;
    color: var(--e-global-color-text);
    font-weight: 800;
    letter-spacing: 1px;
    border-radius: 8px;
    font-size: 12px;
    text-transform: uppercase;
    box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
    text-decoration: none;

    &:hover {
      color: var(--e-global-color-secondary);
    }
    svg {
      margin-right: 5px;
    }
  }
`;

export const PokemonHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 4vh 8vw 4vh;

  h1 {
    color: #ffffff;
    font-size: 35px;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
  }
  h2 {
    font-size: 20px;
    font-weight: 800;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 800px) {
    margin: 8vh 3vw 4vh;
  }
`;

export const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 8vw;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;

  span {
    font-size: 17px;
    font-weight: 600;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  }
`;

export const PokemonImage = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-bottom: 4vh;

  img {
    width: 100%;
    min-width: 300px;
    max-width: 400px;
    height: auto;
  }
`;

export const PokemonStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;

  header {
    display: flex;

    img {
      width: 64px;
      height: 64px;
      padding: 10px;
      background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
      border-radius: 50%;
      box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
      margin: 0 15px 15px 0;
    }
  }

  h3 {
    margin-bottom: 30px;
    text-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  ul {
    display: flex;
    list-style: none;
    position: relative;
    padding-left: 25px;
    flex-wrap: wrap;

    &::before {
      content: '';
      display: block;
      width: 4px;
      top: 0;
      right: auto;
      bottom: 10px;
      left: 0;
      background: rgba(255, 255, 255, 0.35);
      position: absolute;
      border-radius: 2px;
    }

    li {
      p {
        background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
        padding-top: 6px;
        padding-bottom: 6px;
        padding-left: 13px;
        padding-right: 13px;
        margin-top: 0;
        margin-bottom: 14px;
        margin-right: 10px;
        color: var(--e-global-color-text);
        font-weight: 800;
        letter-spacing: 1px;
        border-radius: 8px;
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
      }
    }
  }
`;
