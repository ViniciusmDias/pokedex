import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 5vw;
  min-height: 100vh;

  h1 {
    font-size: 50px;
    font-weight: 800;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
    text-align: center;
    margin: 2vh 0;
  }

  header {
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    align-self: center;
  }

  ul {
    width: 300px;
    align-self: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 2vh;
  }
  button {
    width: 300px;
    align-self: center;
  }
`;
