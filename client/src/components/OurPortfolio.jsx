import React from "react";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  const portfolioItems = [
    {
      src1: "/nelhub_desk.webp",
      src2: "/nelhub_mobile.webp",
      type: "Multi-tenancy E-commerce Application",
      desc: "Nelhub is a scalable web application that enables an unlimited number of shopfronts within one system. It supports three user layers:- Admin – manages tenants, system settings, and platform performance. Tenants (Store Owners) – create and customize storefronts, manage products, orders, and branding. Customers – browse, shop, and enjoy secure, responsive experiences across multiple stores.Highlights include unlimited storefronts with isolated tenant environments- Centralized admin control and role‑based access- Integrated payments and secure transactions- Analytics dashboards for sales and performance. Nelhub empowers businesses to launch and grow online stores quickly, reducing overhead while ensuring flexibility and scalability.",
      link: "https://nelhub-stores.vercel.app",
      stack: [
        "React.js",
        "TypeScript",
        "Zustand",
        "Tailwind",
        "Node",
        "Express",
        "Cloudinary",
        "MongoDB",
      ],
    },
    {
      src1: "/medhunt_desk.webp",
      src2: "/medhunt_mob.webp",
      type: "Healthcare Job Portal",
      desc: "MedHunt is a dynamic full-stack job portal tailored for healthcare professionals. Built with React and Node.js, it streamlines recruitment through secure authentication, intuitive dashboards, and user-friendly job management. MedHunt enables profile creation, resume access, job postings, applications, and filtering by profession—all in one place. It supports recruiters with real-time resume downloads and powerful job tracking, while delivering a seamless experience for medical talent. Integrated with Google SMTP for verified emails and newsletters, it ensures reliable communication. With upcoming features like live chat, job alerts, and profile editing, MedHunt elevates healthcare hiring into a smarter, faster, more connected future.",
      link: "https://medhunt-portal.vercel.app",
      stack: [
        "React.js",
        "Tailwind",
        "Node",
        "Express",
        "Nodemailer",
        "Google SMTP",
        "MongoDB",
      ],
    },
    {
      src1: "/pingme_desk.webp",
      src2: "/pingme_mobile.webp",
      type: "Live chat app",
      desc: "A secure and scalable messaging platform designed for seamless communication. Key features include: Real-Time Messaging – instant chat updates using Socket.io. Online Status Indicator – shows users’ availability in real time. Real-time chat with Google Gemini AI. Secure Authentication – ensures protected access and user identity verification. Efficient Backend Architecture – built for performance, scalability, and low-latency communication. This application delivers a smooth, responsive chat experience with a strong focus on security and real-time functionality.",
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
      src1: "/nelpin_desk.webp",
      src2: "/nelpin_mobile.webp",
      type: "Visual Discovery Engine",
      desc: "A dynamic platform built to foster social interaction and user engagement. Key features include: Secure Authentication & Authorization – ensures safe user access and data protection. Core Social Features – users can create posts, like/unlike content, comment, and save posts for later. User-Centric Design – optimized for interaction, content sharing, and community building. This application combines essential social media functionalities with a secure and scalable architecture for a smooth user experience.",
      link: "https://nelpinterest-app.vercel.app",
      stack: ["React.js", "Tailwind", "Node", "Express", "ImageKit", "MongoDB"],
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
