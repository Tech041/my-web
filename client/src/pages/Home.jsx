import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import OurServices from "../components/OurServices";
import OurPortfolio from "../components/OurPortfolio";
import CustomerReviews from "../components/CustomerReviews";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurVariation from "../components/OurVariation";
import Operation from "../components/Operation";
import Whatsapp from "../components/Whatsapp";

const Home = () => {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Whatsapp />
      <Hero />
      <About />
      <OurServices />
      <OurVariation />
      <Operation />
      <OurPortfolio />
      <Contact />
      <CustomerReviews />
      <Footer />
    </main>
  );
};

export default Home;
