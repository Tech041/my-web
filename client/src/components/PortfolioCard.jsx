import React from "react";

const PortfolioCard = ({ type, desc, link, src1, src2, stack }) => {
  return (
    <div className=" w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 relative my-4">
      <div className="flex-[2]">
        <div className="w-full h-full">
          <img src={src1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[20%] h-[100%] hidden md:block absolute bottom-12 md:bottom-0 left-0">
          <img src={src2} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex-1  ">
        <h1 className="text-xl text-blue-900 font-semibold text-center ">
          {type}
        </h1>
        <p className="my-2 text-center">{desc}</p>
        <div className="flex flex-col items-center">
          <h3 className="text-orange-800 text-sm text-center">Stack</h3>
          <div className="grid grid-cols-2">
            {stack?.map((item, index) => (
              <span key={index} className="px-1 text-xs  font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className=" block text-center  font-bold  py-1 mt-2  text-green-700 hover:cursor-pointer  "
        >
          Live view
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
