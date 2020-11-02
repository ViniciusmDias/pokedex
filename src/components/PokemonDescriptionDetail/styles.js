import styled from 'styled-components';

export const Pokemon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  .link-back {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    max-width: 225px;
    background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 1vw;
    padding-right: 1vw;
    margin-top: 0;
    margin-bottom: 8vh;
    color: var(--e-global-color-text);
    font-weight: 800;
    letter-spacing: 0.1em;
    border-radius: 1vh;
    font-size: 0.7rem;
    text-transform: uppercase;
    box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
    text-decoration: none;

    &:hover {
      color: var(--e-global-color-secondary);
    }
    svg {
      margin-right: 0.5vw;
    }
  }
`;

export const PokemonHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin: 4vh 8vw 4vh;

  h1 {
    color: #ffffff;
    font-size: 4rem;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
  }
  h2 {
    font-size: 2.2rem;
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

  h3 {
    font-size: 2rem;
    margin-bottom: 2vh;
    text-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);

    @media (min-width: 800px) {
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
    padding: 1vh 2vw;
    margin-top: 0;
    margin-bottom: 1.5vh;
    margin-right: 1.5vh;
    color: var(--e-global-color-text);
    font-weight: 800;
    letter-spacing: 1px;
    border-radius: 1vh;
    font-size: 0.7rem;
    text-transform: uppercase;
    box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 800px) {
    flex-direction: row;

    p {
      padding: 1vh 1vw;
    }
  }
`;

export const PokemonInfo = styled.section`
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 2vh;

  @media (min-width: 800px) {
    align-self: center;

    article {
      flex-direction: column;
      padding-left: 2vw;
    }
  }

  article {
    display: flex;
    flex-direction: row;
    position: relative;
    padding-left: 4vw;

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

    p {
      width: max-content;
    }
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

  section {
    margin-bottom: 2vh;

    div {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      padding-left: 4vw;

      @media (min-width: 800px) {
        padding-left: 2vw;
      }

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

      h3 {
        width: 100%;
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 2vw;

        img {
          width: 64px;
          height: 64px;
          padding: 10px;
          background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
          border-radius: 50%;
          box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
          margin: 0 0 2vh;
        }
        p {
          margin: 0 1vw 2vh 0;
        }
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    position: relative;
    padding-left: 4vw;
    flex-wrap: wrap;

    @media (min-width: 800px) {
      padding-left: 2vw;
    }

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
  }
`;
