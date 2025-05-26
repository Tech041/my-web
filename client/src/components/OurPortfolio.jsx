import React from "react";
import PortfolioCard from "./PortfolioCard";

const OurPortfolio = () => {
  return (
    <section className="w-full h-full pb-10 " id="portfolio">
      <div className="container">
        <h1 className="text-lg font-semibold text-blue-900 text-center">
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
              link={"https://vicel-pharmacy.onrender.com/"}
            />

            <PortfolioCard
              src1={"/kedi_desk.png"}
              src2={"/kedi_mobile.png"}
              type={"Landing page website"}
              link={"https://kedi-pharma.vercel.app/"}
            />
            <PortfolioCard
              src1={"/pingme_desk.png"}
              src2={"/pingme_mobile.png"}
              type={"Live chat app"}
              link={"https://pingme-chat-app.vercel.app/"}
            />
            <PortfolioCard
              src1={"/nelpin_desk.png"}
              src2={"/nelpin_mobile.png"}
              type={"Pinterest Clone"}
              link={"https://nelpinterest-app.vercel.app/"}
            />
            <PortfolioCard
              src1={"/lms_desktop.png"}
              src2={"/lms_mobile.png"}
              type={"LMS "}
              link={"https://neldemy-lms.vercel.app/"}
            />

            <PortfolioCard
              src1={"/mern_desk.png"}
              src2={"/mern_mobile.png"}
              type={"Authentication system"}
              link={"https://mernauth-frontend.vercel.app/"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
