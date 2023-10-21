import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyled;
