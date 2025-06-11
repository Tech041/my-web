import React from "react";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  const portfolioItems = [
    {
      src1: "/realdesk.webp",
      src2: "/realmobile.webp",
      type: "Real Estate web application",
      desc: "A modern platform that connects property owners with potential buyers through a robust multi-agent system. Key features include: Admin Dashboard  for managing users, listings, and site activity. User Authentication & Authorization – secure sign-up, login, and role-based access. Property Listings – users can add, view, edit, and manage property details. Multi-Agent Functionality – allows multiple agents to manage and showcase their own properties. This solution streamlines the real estate process with a user-friendly interface and scalable architecture.",
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
      desc: "A modern e-commerce platform designed to automate the sale of pharmaceutical products. Key features include: Shopping Cart Functionality – smooth product selection and order management. User Profiles – personalized user accounts with order history and preferences. Secure Payment Integration – streamlined checkout with a connected payment gateway. Admin Panel – enables product management, image uploads, and inventory control. This solution simplifies online pharmaceutical sales, ensuring a secure, user-friendly, and efficient buying experience.",
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
      desc: "A secure and scalable messaging platform designed for seamless communication. Key features include: Real-Time Messaging – instant chat updates using Socket.io. Online Status Indicator – shows users’ availability in real time. Secure Authentication – ensures protected access and user identity verification. Efficient Backend Architecture – built for performance, scalability, and low-latency communication. This application delivers a smooth, responsive chat experience with a strong focus on security and real-time functionality.",
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
      desc: "A dynamic platform built to foster social interaction and user engagement. Key features include: Secure Authentication & Authorization – ensures safe user access and data protection. Core Social Features – users can create posts, like/unlike content, comment, and save posts for later. User-Centric Design – optimized for interaction, content sharing, and community building. This application combines essential social media functionalities with a secure and scalable architecture for a smooth user experience.",
      link: "https://nelpinterest-app.vercel.app",
      stack: ["React.js", "Tailwind", "Node", "Express", "ImageKit", "MongoDB"],
    },
    {
      src1: "/mern_desk.webp",
      src2: "/mern_mobile.webp",
      type: "Secure Authentication Sytem",
      desc: "A reliable and scalable user authentication system designed for modern web applications. Key features include: Login & Logout Functionality – secure and session-managed user access. OTP-Based Email Verification – ensures account authenticity via one-time passwords. Password Reset – supports secure password recovery using Google SMTP. Scalable Backend Architecture – built for performance, reliability, and easy integration into larger systems. This solution provides a strong foundation for user security and trust in any application environment.",
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
      desc: "An eCommerce platform tailored for selling health supplements online. Key features include: Admin Login – secure access for store management. Admin Panel – allows product uploads, image management, and inventory updates. User-Friendly Interface – designed for easy navigation and product discovery. This solution streamlines product management while offering a smooth shopping experience for customers.",
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
      desc: "A modern, intuitive learning interface designed to support skill development through interactive tutorials and intelligent automation. Key features include: AI-Powered Chatbot – offers real-time guidance, answering learner queries and personalizing content delivery. User authentication and authorization. Scalable Frontend Architecture – built with modern frameworks for performance and flexibility. Structured Learning Experience – organized modules and tutorials tailored for progressive skill acquisition. This platform blends clean UI design with smart automation to create a highly effective digital learning environment.",
      link: "https://neldemy-lms.vercel.app/",
      stack: ["React.js", "Tailwind", " Gemini", "Node", "Express", "MongoDB"],
    },

    {
      src1: "/kedi_desk.webp",
      src2: "/kedi_mobile.webp",
      type: "Landing page website",
      desc: "A high-converting, fully responsive landing page designed for maximum engagement. Key features include: Performance Optimization – fast load times and smooth user experience. SEO-Friendly Structure – built with best practices to enhance search engine visibility. Responsive Design – adapts seamlessly across all devices and screen sizes. This landing page is crafted to drive conversions, capture attention, and support digital marketing goals effectively.",
      link: "https://kedi-pharma.vercel.app/",
      stack: ["React.js", "Tailwind"],
    },
  ];

  return (
    <section className="w-full h-full mt-5 pb-10 " id="portfolio">
      <div className="container">
        <h1 className="text-2xl font-bold text-blue-900 text-center">
          MY PORTFOLIO
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
