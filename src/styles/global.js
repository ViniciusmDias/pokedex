import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 14px;
  }

  a, body, button, h1, h2, h3, h4, h5, input, select {
    font-family: 'Nunito',sans-serif;
    color: #ffffff;
  }

  h1 {
    margin-bottom: .5rem;
    line-height: 1.2;
    font-weight: 800;
  }

  h2 {
    margin-bottom: .5rem;
    line-height: 1.2;
  }

  h3 {
    font-weight: 800;
  }

  p {
    font-size: 12px;
  }

  #root {
    --e-global-color-primary: #459D49;
    --e-global-color-secondary: #54595F;
    --e-global-color-text: #7A7A7A;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 765px) {
    html {
      font-size: 16px;
    }
  }
`;
