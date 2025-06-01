import React from "react";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  const portfolioItems = [
    {
      src1: "/realdesk.png",
      src2: "/realmobile.png",
      type: "Real Estate web application",
      desc: "This is a real estate web application that connects property owners to buyers through a multi-agent system. Features include an admin panel, user authentication and authorization, property listing and editing.",
      link: "https://luxlife.onrender.com",
      stack: [
        "React.js",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],
    },
    {
      src1: "/vicel_desk.png",
      src2: "/vicel_mobile.png",
      type: "Ecommerce web application",
      desc: "This application automates pharmaceutical product sales, including cart, order history, user profile, payment gateway, and admin panel for image upload and product management.",
      link: "https://vicel-pharmacy.onrender.com/",
      stack: [
        "React.js",
        "Tailwind",
        "Node",
        "Express",
        "Stripe",
        "MongoDB",
        "Cloudinary",
      ],
    },
    {
      src1: "/pingme_desk.png",
      src2: "/pingme_mobile.png",
      type: "Live chat app",
      desc: "Real-time chat application for secure communication, featuring online indicator, secure authentication, and efficient backend for scalability.",
      link: "https://pingme-chat-app.vercel.app/",
      stack: [
        "React.js",
        "Tailwind",
        "Daisy UI",
        "Node",
        "Express",
        "Socket.io",
        "Gemini",
        "MongoDB",
        "Cloudinary",
      ],
    },
    {
      src1: "/mern_desk.png",
      src2: "/mern_mobile.png",
      type: "Secure Authentication Sytem",
      desc: "Secure authentication system featuring login,logout, OTP-based email verification and password reset using google SMTP. Highly scalable with robust backend",
      link: "https://mernauth-frontend.vercel.app/",
      stack: [
        "React.js",
        "Tailwind",
        "Node",
        "Express",
        "Google SMTP",
        "MongoDB",
      ],
    },

    {
      src1: "/lms_desktop.png",
      src2: "/lms_mobile.png",
      type: "Learning Management System",
      desc: "Intuitive learning UI design with AI powered chatbot,modern frontend architecture for scalability. This is a well structured platform for learning and skill acquisition through tutorials and automated AI chatbot",
      link: "https://neldemy-lms.vercel.app/",
      stack: ["React.js", "Tailwind", " Gemini", "Node", "Express", "MongoDB"],
    },

    {
      src1: "/kedi_desk.png",
      src2: "/kedi_mobile.png",
      type: "Landing page website",
      desc: "High-converting responsive landing page, performance-optimized and SEO-friendly.",
      link: "https://kedi-pharma.vercel.app/",
      stack: ["React.js", "Tailwind"],
    },
  ];

  return (
    <section className="w-full h-full mt-5 pb-10 " id="portfolio">
      <div className="container">
        <h1 className="text-2xl font-bold text-blue-900 text-center">
          Our Portfolio
        </h1>
        <div className="flex justify-center items-center gap-3 ">
          {/* Portfolio */}
          {/* mobile version */}
          <div className="">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
