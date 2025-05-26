import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import OurServices from "../components/OurServices";
import OurPortfolio from "../components/OurPortfolio";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <OurServices />
      <OurPortfolio />
      <Contact />
      <CustomerReviews />
    </main>
  );
};

export default Home;
