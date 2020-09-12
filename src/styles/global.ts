import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Roboto Light'), local('Roboto-Light'),
       url('/fonts/roboto-v20-latin-300.woff2') format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Roboto'), local('Roboto-Regular'),
       url('/fonts/roboto-v20-latin-regular.woff2') format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Roboto Medium'), local('Roboto-Medium'),
       url('/fonts/roboto-v20-latin-500.woff2') format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Roboto Bold'), local('Roboto-Bold'),
       url('/fonts/roboto-v20-latin-700.woff2') format('woff2');
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

 

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100vh;
   

    
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #182534;
    background-image: url('./img/background.webp');
  }

  button{
    font-family: 'Roboto';
  }
`

export default GlobalStyles
