import React from "react";
import ReactDOM from "react-dom/client";
import Index from ".";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }

  a, a:visited{
  color: inherit;
  }
  
  body {
    background: rgba(255, 255, 255, 0.95);
  }
  
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Index />
  </React.StrictMode>
);
