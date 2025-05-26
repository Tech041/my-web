import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import OurServices from "../components/OurServices";
import OurPortfolio from "../components/OurPortfolio";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Footer />
    </main>
  );
};

export default Home;
