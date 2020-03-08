import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./queries/SiteMetadata";
import { withPrefix } from "gatsby";
import GlobalStyles from "../components/global/global-styles";
import styled from "styled-components";

const LayoutStyled = styled.div`
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 200px;

    @media screen and (min-width: 600px) {
      padding-top: 230px;
    }
    @media screen and (min-width: 1000px) {
      padding-top: 260px;
    }
  }
`;

const TemplateWrapper = ({ children, path }) => {
  const { title, description } = useSiteMetadata();
  return (
    <LayoutStyled>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/daa5gtp.css"
        ></link>
      </Helmet>
      <Navbar path={path} />
      <div className="container">{children}</div>
      <Footer />
      <GlobalStyles></GlobalStyles>
    </LayoutStyled>
  );
};

export default TemplateWrapper;
