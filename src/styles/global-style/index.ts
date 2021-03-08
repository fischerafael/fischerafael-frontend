import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;       

    font: 400 16px 'Poppins', sans-serif;    
  }  
  h1, h2, h3, h4, h5, h6, p, a, span {
    margin: 0;
    padding: 0;   
    color: #333; 
    font: inherit;
    line-height: 100%;
    font-style: normal;
    
  } 
  
`
