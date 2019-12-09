import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

export const InkPageTemplate = ({ title }) => <div></div>;

InkPageTemplate.propTypes = {
  title: PropTypes.string
};

const InkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <InkPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

InkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default InkPage;

export const pageQuery = graphql`
  query InkPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ink-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
