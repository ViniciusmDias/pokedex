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

    a {
      width: 100%;
      display: flex;
      background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 13px;
      padding-right: 13px;
      margin: 0;
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.65);
      font-weight: 800;
      -webkit-letter-spacing: 1px;
      -moz-letter-spacing: 1px;
      -ms-letter-spacing: 1px;
      letter-spacing: 1px;
      border-radius: 8px;
      font-size: 12px;
      text-transform: uppercase;
      box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
      text-decoration: none;
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    margin: 2vh 0;

    button {
      width: 300px;
      align-self: center;
      color: rgba(0, 0, 0, 0.65);
    }
  }
`;
