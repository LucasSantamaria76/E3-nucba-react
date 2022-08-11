import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
      --primary-color: #2980B9;
     --secondary-color: #F39C12;
     --danger-color: #EE0000;
      --success-color: #27AE60;
      --warning-color: #F39C12;
      --info-color: #3498DB;     
  }

  * {
    box-sizing: border-box;
  }
  
  html{
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-width: 100vw;
    background:#F2F3F4;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
`;
