import React from "react";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  const portfolioItems = [
    {
      src1: "/realdesk.webp",
      src2: "/realmobile.webp",
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
      src1: "/vicel_desk.webp",
      src2: "/vicel_mobile.webp",
      type: "Ecommerce web application",
      desc: "This application automates pharmaceutical product sales, features include cart and other functionalities, user profile, payment gateway, and admin panel for image upload and product management.",
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
      src1: "/pingme_desk.webp",
      src2: "/pingme_mobile.webp",
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
      src1: "/nelpin_desk.webp",
      src2: "/nelpin_mobile.webp",
      type: "Visual Discovery Engine",
      desc: "This application facilitates social interaction.Features include secure user authentication and authorization, with core social media features which include like/unlike,save,comment and post functionalities.  .",
      link: "https://nelpinterest-app.vercel.app",
      stack: ["React.js", "Tailwind", "Node", "Express", "ImageKit", "MongoDB"],
    },
    {
      src1: "/mern_desk.webp",
      src2: "/mern_mobile.webp",
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
      src1: "/coldesk.webp",
      src2: "/colmob.webp",
      type: "Nutraceutical online Store",
      desc: "This is  health supplement online store, features include admin login, and admin panel for image upload and product management.",
      link: "https://cols-nutraceutical.onrender.com/",
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
      src1: "/lms_desktop.webp",
      src2: "/lms_mobile.webp",
      type: "Learning Management System",
      desc: "Intuitive learning UI design with AI powered chatbot,modern frontend architecture for scalability. This is a well structured platform for learning and skill acquisition through tutorials and automated AI chatbot",
      link: "https://neldemy-lms.vercel.app/",
      stack: ["React.js", "Tailwind", " Gemini", "Node", "Express", "MongoDB"],
    },

    {
      src1: "/kedi_desk.webp",
      src2: "/kedi_mobile.webp",
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
          My Portfolio
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
