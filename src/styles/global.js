import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --gray-100: #F2F2F2;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1A1A1A;
    --gray-700: #0D0D0D;

    --blue-dark: #1E6F9F;
    --blue: #4EA8DE;

    --purple: #8284FA;

    --red-dark: #8b0000;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--gray-600);
    color: var(--gray-100);
  }

  body, input, textarea, button{
    font: 400 1rem 'Roboto', sans-serif;
  }
  
  button{
    background: none;
    cursor: pointer;
    transition: filter .2s ease;
    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }
  
  button, input, textarea {
    border: none;
    outline: 0;
    background: none;
  }
  button, a, input[type="submit"] {
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .react-modal-register-overlay{
    width: 100%;
    margin:0 20px;
    max-width: 900px;
    background: var(--gray-700);
    border: 1px solid var(--gray-500);
    border-radius: 0.24rem;
    padding: 3rem;
    outline: 0;
  }
`;