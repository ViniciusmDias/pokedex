import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a.previous-poke {
    left: 4vw;
    color: #fff;
    position: absolute;
    font-size: 32px;
  }
  a.next-poke {
    right: 4vw;
    color: #fff;
    position: absolute;
    font-size: 32px;
  }
`;
