import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioDetails from "./pages/PortfolioDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
