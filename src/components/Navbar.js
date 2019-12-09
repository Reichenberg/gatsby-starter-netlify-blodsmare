import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100vw;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  h1 {
    font-family: big-caslon-fb, serif;

    font-weight: 400;

    font-style: normal;
    font-size: 28px;
    color: #3f464a;
  }

  ul {
    font-family: montserrat-alternates, sans-serif;

    font-weight: 200;

    font-style: normal;

    list-style-type: none;
    text-align: center;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;
      color: #3f464a;
      padding: 5px;
      display: block;
    }
  }
`;

export default function Navbar() {
  return (
    <HeaderStyled>
      <h1>BLODSMARE</h1>
      <ul>
        <li>
          <Link to="/ink">ink</Link>
        </li>
        <li>
          <Link to="/illustrations">illustrations</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </HeaderStyled>
  );
}
