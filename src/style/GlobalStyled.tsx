import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    
  }

  a {
    text-decoration: none;
  }
  .hidden {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

export default GlobalStyled;
