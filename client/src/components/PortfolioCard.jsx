import React from "react";

const PortfolioCard = ({ type, desc, link, src1, src2 }) => {
  return (
    <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 relative my-4">
      <div className="flex-[2]">
        <div className="w-full h-full">
          <img src={src1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[20%] h-[100%] absolute bottom-16 md:bottom-0 left-0">
          <img src={src2} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex-1 mt-0 md:mt-0 ">
        <h1 className="text-xl text-blue-900 font-semibold text-start ">
          {type}
        </h1>
        <p className="py-2">{desc}</p>
        <a
          href={link}
          target="_blank"
          className="text-center  font-bold  py-1 mt-2  text-green-700 hover:cursor-pointer  "
        >
          Live view
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
