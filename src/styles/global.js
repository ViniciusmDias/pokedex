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
    font-weight: 500;
    line-height: 1.2;
  }
  h2 {
    margin-bottom: .5rem;
    line-height: 1.2;
  }
  #root {
    --e-global-color-primary: #459D49;
    --e-global-color-secondary: #54595F;
    --e-global-color-text: #7A7A7A;
    --e-global-color-accent: #61CE70;
    --e-global-color-58fda727: #4054B2;
    --e-global-color-37782459: #23A455;
    --e-global-color-1d2624b6: #000;
    --e-global-color-3e4ac817: #FFF;
    --e-global-color-30078b89: #000000;
    --e-global-color-6a215bf4: #73F384;
    --e-global-color-eff87ba: #1A202C;
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
