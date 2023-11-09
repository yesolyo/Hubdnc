import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
body {
  display: flex;
  margin: 0;
  font: inherit;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
#root{
  width:100vw;
  height:100vh;
}
`;
