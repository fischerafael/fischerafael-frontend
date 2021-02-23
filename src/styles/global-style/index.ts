import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;       

    font: 400 16px 'Roboto Slab', serif;
  }  
`
