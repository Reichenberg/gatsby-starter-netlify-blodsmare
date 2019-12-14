import React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import getImages from "./queries/GalleryImages";
import { graphql, useStaticQuery } from "gatsby";

const GalleryStyled = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;

  img {
    border-radius: 2px;
    width: 80%;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 600px) {
    padding-top: 230px;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    img {
      width: 30%;
    }
  }
`;

const ImagePosed = posed.img({
  enter: {
    opacity: 1,
    delay: 200
  },
  exit: {
    opacity: 0
  }
});

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

  console.log(allMarkdownRemark.nodes);

  return (
    <GalleryStyled>
      <PoseGroup animateOnMount>
        {allMarkdownRemark.nodes
          .filter(item => item.frontmatter.type === type)
          .map((item, index) => (
            <ImagePosed
              src={item.frontmatter.image}
              alt={item.frontmatter.altText}
              key={index}
            />
          ))}
      </PoseGroup>
    </GalleryStyled>
  );
};

export default Gallery;
