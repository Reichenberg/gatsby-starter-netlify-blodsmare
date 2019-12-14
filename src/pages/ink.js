import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

export default function ink({ location }) {
  return (
    <Layout path={location.pathname}>
      <Gallery type="ink"></Gallery>
    </Layout>
  );
}
