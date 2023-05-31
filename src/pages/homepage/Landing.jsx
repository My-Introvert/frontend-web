import React from "react";
import Layout from "./Layout";
import Hero from "../../components/homepage/Hero";
import ServicePage from "../../components/homepage/Tiles";
import "./css/Landing.css";

const LandingPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <ServicePage />
      </Layout>
    </div>
  );
};

export default LandingPage;
