import React from "react";
import Layout from "../components/Layout";

export default function index({ location }) {
  return <Layout path={location.pathname}></Layout>;
}
