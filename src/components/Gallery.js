import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";

const GalleryStyled = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 2px;
    width: 80%;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    img {
      width: 30%;
      padding-bottom: 0px;
    }
  }
`;

const Gallery = ({ type }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query GET_IMAGES_FOR_GALLERY {
        allMarkdownRemark(filter: { frontmatter: { enabled: { eq: true } } }) {
          nodes {
            frontmatter {
              altText
              enabled
              image
              title
              type
            }
          }
        }
      }
    `
  );

  return (
    <GalleryStyled>
      {allMarkdownRemark.nodes
        .filter(item => item.frontmatter.type === type)
        .map((item, index) => (
          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            src={item.frontmatter.image}
            alt={item.frontmatter.altText}
            key={index}
          />
        ))}
    </GalleryStyled>
  );
};

export default Gallery;
