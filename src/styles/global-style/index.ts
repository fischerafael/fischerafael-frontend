import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }
  html, body {         
    font: 400 16px 'Poppins', sans-serif;
    color: white;    
    background: #141414;
  } 

  @media (max-width: 1024px) {
    html {
      font-size: 95%;
    }    
  }

  @media (max-width: 800px) {
    html {
      font-size: 90%;
    }    
  }

  @media (max-width: 600px) {
    html {
      font-size: 85%;
    }    
  }

  @media (max-width: 480px) {
    html {
      font-size: 80%;
    }    
  }
`
