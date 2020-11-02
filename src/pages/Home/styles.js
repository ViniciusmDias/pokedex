import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: white;

  @media (min-height: 900px) {
    justify-content: center;

    @media (min-width: 800px) {
      h1 {
        font-size: 3rem;
      }
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--e-global-color-primary);
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
    text-align: center;
    margin: 2vh 0;
  }

  header {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    align-self: center;

    input {
      color: var(--e-global-color-text);
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      width: 300px;
      background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
      padding-top: 1vh;
      padding-bottom: 1vh;
      padding-left: 1vw;
      padding-right: 1vw;
      margin-top: 0;
      margin-bottom: 0.2vh;
      color: var(--e-global-color-text);
      font-weight: 800;
      letter-spacing: 0.1em;
      border-radius: 1vh;
      font-size: 0.7rem;
      text-transform: uppercase;
      box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
      text-decoration: none;
    }
    select {
      color: var(--e-global-color-text);
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      width: 300px;
      padding-top: 1vh;
      padding-bottom: 1vh;
      padding-left: 1vw;
      padding-right: 1vw;
      margin-top: 0;
      color: var(--e-global-color-text);
      font-weight: 800;
      letter-spacing: 0.1em;
      border-radius: 1vh;
      font-size: 0.7rem;
      text-transform: uppercase;
      box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
      text-decoration: none;
    }
  }

  ul {
    width: 300px;
    height: 65%;
    align-self: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    list-style: none;
    margin-bottom: 2vh;
    overflow: auto;

    @media (min-height: 900px) {
      overflow: hidden;
    }

    a {
      width: 100%;
      display: flex;
      background-color: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 13px;
      padding-right: 13px;
      margin: 0;
      margin-right: 10px;
      color: var(--e-global-color-text);
      font-weight: 800;
      -webkit-letter-spacing: 1px;
      -moz-letter-spacing: 1px;
      -ms-letter-spacing: 1px;
      letter-spacing: 1px;
      border-radius: 8px;
      font-size: 0.7rem;
      text-transform: uppercase;
      box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
      text-decoration: none;

      &:hover {
        background: linear-gradient(
          to bottom,
          #ffffff 0%,
          var(--e-global-color-primary) 100%
        );

        color: var(--e-global-color-secondary);
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;

    button {
      width: 300px;
      align-self: center;
      color: var(--e-global-color-text);
      background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 13px;
      padding-right: 13px;
      margin-top: 0;
      margin-bottom: 4px;
      margin-right: 10px;
      color: var(--e-global-color-text);
      font-weight: 800;
      letter-spacing: 1px;
      border-radius: 8px;
      font-size: 0.7rem;
      text-transform: uppercase;
      box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
      text-decoration: none;
      transition: opacity 0.6s ease-in;

      &:hover {
        opacity: 0.8;
        color: var(--e-global-color-secondary);
      }
    }
    p {
      display: flex;
      justify-content: center;
      color: var(--e-global-color-text);

      a {
        color: var(--e-global-color-primary);
      }
    }
  }
`;
