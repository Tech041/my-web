import React from "react";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  const portfolioItems = [
    {
      src1: "/med_desk.webp",
      src2: "/med_mob.webp",
      type: "Medlook",
      desc: `Patients often struggle to find essential medications, spending time navigating multiple pharmacies across the city. Pharmacies, on the other hand, face limited visibility and miss out on potential customers without dedicated e‑commerce systems.MedLook solves these challenges by enabling users to search for drugs, check availability, and locate nearby pharmacies. When a medication isn’t found, patients can submit requests directly through the platform. Pharmacies gain wider reach and customer coverage, while patients save time and stress with a trusted, centralized solution for medication access`,
      link: "https://www.medlook.com.ng",
      stack: [
        "React.js",
        "Tailwind",
        "Node",
        "Express",
        "TypeScript",
        "Cloudinary",
        "MongoDB",
      ],
    },
    {
      src1: "/medhunt_desk.webp",
      src2: "/medhunt_mob.webp",
      type: "Medhunt",
      desc: ` Healthcare professionals often struggle to find stable job opportunities, with many postings shared informally on platforms like WhatsApp where they disappear after 24 hours. MedHunt solves this problem by providing a dedicated job portal tailored to healthcare workers.With MedHunt, users can easily register, upload their resumes (similar to LinkedIn and other job portals), and access a personalized dashboard to track applications and progress. Professionals can directly apply to relevant jobs, while recruiters can post openings, manage applicants, and download resumes — all within the platform. MedHunt makes job discovery and recruitment in healthcare simple, reliable, and efficient.`,
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
      src1: "/nelhub_desk.webp",
      src2: "/nelhub_mobile.webp",
      type: "Nelhub",
      desc: `Many small and medium-scale businesses struggle to own and maintain individual e‑commerce platforms due to high costs and technical complexity. Nelhub solves this challenge by offering a multitenant e‑commerce solution that supports unlimited tenants.Each tenant gets a dedicated dashboard, a unique storefront with its own subdomain, and user accounts tied specifically to that shop. This allows businesses to enjoy the same benefits as large companies — wider customer reach, streamlined management, and increased visibility — all on a single platform without the burden of building and maintaining their own e‑commerce systems `,
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
      src1: "/pingme_desk.webp",
      src2: "/pingme_mobile.webp",
      type: "PingMe",
      desc: `Many organizations rely on public communication platforms that can be unreliable and expose sensitive data if compromised. PingMe provides a secure, private real‑time chat solution designed for businesses to maintain control over their communication channels.With PingMe, organizations can manage their own messaging environment, audit activity, and track vulnerabilities, ensuring that internal communication remains stable, confidential, and fully under their control.`,
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
      type: "LuxLife",
      desc: `Finding reliable property listings can be challenging, and many buyers risk scams while property owners struggle with visibility. LuxLife addresses these issues by providing a secure, verified system for property transactions.Property owners can list their homes under a trusted framework, while buyers can search based on location, property type, and view detailed listings with images, descriptions, and contact information. By combining transparency with convenience, LuxLife makes property discovery safer and more accessible for everyone`,
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
