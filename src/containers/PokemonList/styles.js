import styled from 'styled-components';

export const List = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2vh 5vw 0;
    list-style: none;

    @media (min-width: 765px) {
      margin: 2vh 10vw 0;
    }

    a {
      display: flex;
      justify-content: center;
      width: 100%;
      text-decoration: none;
      margin: 4vh 0;
      width: 46%;
      flex-direction: column;

      @media (min-width: 765px) {
        width: 22%;
        margin: 4vh 4vw;
      }
    }
  }
`;
export const Options = styled.div`
  margin: 2vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 765px) {
    margin: 2vh 10vw 0;
  }
  h1 {
    font-weight: 900;
    text-transform: lowercase;
  }
  span {
    font-weight: 400;
    color: #e6e6e6;
  }
  div {
    margin: 4vh 4vw 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    button {
      background-color: transparent;
      border: none;
      font-size: 1.2rem;
    }
    .active {
      color: var(--primary);
    }
  }
`;
