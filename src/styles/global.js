import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 65.5%;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    color: ${({ theme }) => theme.COLORS.SATIN_WHITE}
  }

  html ::-webkit-scrollbar {
  width: 1rem;
  }

  html ::-webkit-scrollbar-thumb {
  border-radius: 8rem;
  background: ${({ theme }) => theme.COLORS.PINK};
  }

  html ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }

  a {
    text-decoration: none;
  }
  
  button , a {
    cursor: pointer;

    transition: .4s;
  }

  button:hover  a:hover{
    filter: brightness(0.4);
  }
`
