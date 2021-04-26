import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Montserrat', sans-serif;
    color: #4e4e50;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #4e4e50;
    font-weight: bold;
  }

  ul, li {
    list-style: none;
    font-weight: bold;
    color: #4e4e50;
  }

  button {
    cursor: pointer;
    font-weight: bold;
  }


`;
