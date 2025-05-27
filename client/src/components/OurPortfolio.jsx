import React from "react";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
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
            <PortfolioCard
              src1={"/vicel_desk.png"}
              src2={"/vicel_mobile.png"}
              type={"Ecommerce web application"}
              desc={
                " Features cart,order history, and admin panel, user authentication and authorization , image upload and product management."
              }
              link={"https://vicel-pharmacy.onrender.com/"}
            />

            <PortfolioCard
              src1={"/kedi_desk.png"}
              src2={"/kedi_mobile.png"}
              desc={
                "High-converting responsive landing page, performance-optimized and SEO-friendly."
              }
              type={"Landing page website"}
              link={"https://kedi-pharma.vercel.app/"}
            />
            <PortfolioCard
              src1={"/pingme_desk.png"}
              src2={"/pingme_mobile.png"}
              type={"Live chat app"}
              desc={
                "Real-time chat with online indicator, secure authentication and authorization, message delivery tone and efficient backend for scalability."
              }
              link={"https://pingme-chat-app.vercel.app/"}
            />
            <PortfolioCard
              src1={"/nelpin_desk.png"}
              src2={"/nelpin_mobile.png"}
              type={"Pinterest Clone"}
              desc={
                "Pinterest-style UI with dynamic masonry layout, image upload with core social media features like save, follow/unfollow user, comment and like/unlike functionalities."
              }
              link={"https://nelpinterest-app.vercel.app/"}
            />
            <PortfolioCard
              src1={"/lms_desktop.png"}
              src2={"/lms_mobile.png"}
              type={"Learning management system "}
              desc={
                "Intuitive learning UI design with AI powered chatbot,modern frontend architecture for scalability."
              }
              link={"https://neldemy-lms.vercel.app/"}
            />

            <PortfolioCard
              src1={"/mern_desk.png"}
              src2={"/mern_mobile.png"}
              type={"Authentication system"}
              desc={
                "Complete authentication system featuring login,logout, OTP-based email verification and password reset using google SMTP."
              }
              link={"https://mernauth-frontend.vercel.app/"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
