import React from "react";
import Layout from "../Component/Landing/Layout/Layout";
import Hero from "../Component/Landing/Hero/Hero";
import Recently from "../Component/Landing/Product/Recently";
import Aid from "../Component/AID/Aid";
import About from "../Component/Landing/About/About";
import Subscribe from "../Component/Landing/Subscribe/Subscribe";
import Footer from "../Component/Footer/Footer";
import Popular from "../Component/Landing/Product/Popular";

const Landing = () => {
  return (
    <>
      <Layout />
      <Hero />
      <Popular />
      <Aid />
      <Recently />
      <About />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Landing;
