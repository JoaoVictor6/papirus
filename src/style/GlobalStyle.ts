import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  border-style, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 10px;
  }
`;

export default GlobalStyle;
