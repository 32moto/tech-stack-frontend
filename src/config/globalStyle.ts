import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  h1, h2, h3, h4, h5, p, span {
    color: #7D7D7D;
  }
  button {
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
