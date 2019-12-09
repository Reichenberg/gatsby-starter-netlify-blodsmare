import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
    background-color: #ececec;
}

a{ 
    text-decoration: none;
      color: #3f464a;
}

p, a {
    font-family: montserrat-alternates, sans-serif;

font-weight: 200;

font-style: normal;
}

ul{
    list-style-type: none;
}
`;

export default GlobalStyles;
