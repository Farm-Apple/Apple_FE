import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../assets/fonts/fonts.css';

const GlobalStyled = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-family: SpoqaHanSansNeo, sans-serif;
    font-size: 62.5%;
  }
  body {
    
  }

  a {
    text-decoration: none;
  }
  button {
    border: none;
  }
  input, label {
    padding: 0;
    margin: 0;
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
