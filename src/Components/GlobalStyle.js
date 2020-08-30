import React from "react";
import { createGlobalStyle } from 'styled-components';
import { reset } from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset};
  a {
    text-decoration :none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    padding-top: 50px;
    font-size:12px;
    background-color:rgba(20, 20, 20, 1);
    color: white;
  }
`;

export default GlobalStyle;