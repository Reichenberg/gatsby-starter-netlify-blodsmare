import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100vw;
  height: 100px;
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: #ececec;

  hr {
    width: 92%;
    border: 1px solid #707070;
    border-radius: 5px;
  }

  ul {
    padding: 0;
    margin: 0;
    padding-left: 30px;

    li {
      float: left;
      clear: both;
      font-size: 12px;
    }

    li:first-of-type {
      padding-bottom: 18px;
      padding-top: 10px;
    }
  }

  @media screen and (min-width: 1000px) {
    height: 120px;

    hr {
      width: 95%;
    }
    ul {
      padding-left: 70px;

      li {
        clear: none;
        padding-top: 40px !important;
        font-size: 14px;
        padding-right: 20px;
      }
    }
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <FooterStyled>
        <hr />
        <ul>
          <li>
            <a href="mailto:elise.nedal@gmail.com">elise.nedal@gmail.com</a>
          </li>
          <li>
            <a href="https://www.instagram.com/blodsmare/">@blodsmare</a>
          </li>
        </ul>
      </FooterStyled>
    );
  }
};

export default Footer;
