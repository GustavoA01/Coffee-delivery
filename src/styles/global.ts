import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
}

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: ${props=>props.theme['background']};
}

`
  