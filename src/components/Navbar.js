import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";

const HeadingPosed = posed(Link)({
  enter: {
    opacity: 1,
    delay: 100,
    transition: {
      duration: 600
    }
  },
  exit: {
    opacity: 0
  }
});
const ListPosed = posed.ul({
  enter: {
    opacity: 1,
    delay: 300,
    transition: {
      duration: 600
    }
  },
  exit: {
    opacity: 0
  }
});

const HeaderStyled = styled.header`
  width: 100vw;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;

  @media screen and (min-width: 1000px) {
    padding-top: 140px;
  }

  @media screen and (min-width: 1900px) {
    padding-top: 200px;
  }
  h1 {
    font-family: big-caslon-fb, serif;

    font-weight: 400;

    font-style: normal;
    font-size: 28px;
    color: #3f464a;
    margin: 0;

    @media screen and (min-width: 601px) {
      font-size: 36px;
    }

    @media screen and (min-width: 1000px) {
      font-size: 48px;
    }

    @media screen and (min-width: 1400px) {
      font-size: 56px;
    }

    @media screen and (min-width: 1900px) {
      font-size: 76px;
    }
  }

  ul {
    font-size: 16px;

    list-style-type: none;
    text-align: center;
    padding: 0;
    margin: 0;

    padding-top: 40px;

    @media screen and (min-width: 1000px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1400px) {
      padding-top: 60px;

      font-size: 22px;
    }

    @media screen and (min-width: 1900px) {
      font-size: 28px;
      padding-top: 90px;
    }

    a {
      padding: 5px;
      display: block;
    }
  }
`;

export default function Navbar({ path }) {
  return (
    <HeaderStyled>
      <PoseGroup animateOnMount>
        <HeadingPosed key={0} to="/">
          <h1>BLODSMARE</h1>
        </HeadingPosed>

        <ListPosed key={1}>
          <li>
            <Link to="/ink">ink</Link>
          </li>
          <li>
            <Link to="/illustrations">illustrations</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ListPosed>
      </PoseGroup>
    </HeaderStyled>
  );
}
