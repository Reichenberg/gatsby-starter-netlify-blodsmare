import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

export const IllustrationsPageTemplate = ({ title }) => <div></div>;

IllustrationsPageTemplate.propTypes = {
  title: PropTypes.string
};

const IllustrationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IllustrationsPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

IllustrationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IllustrationsPage;

export const pageQuery = graphql`
  query IllustrationsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "illustration-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
