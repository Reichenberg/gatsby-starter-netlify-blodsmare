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

p, a, label {
    font-family: montserrat, sans-serif;
font-weight: 200;
font-style: normal;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus, input:-internal-autofill-selected  {
  border: none;
  -webkit-text-fill-color: #000;
  -webkit-box-shadow: none;
  background-color: #fff !important;

}

ul{
    list-style-type: none;
}
`;

export default GlobalStyles;
