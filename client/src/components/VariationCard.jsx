import React from "react";
const VariationCard = ({ icon, title, text }) => {
  return (
    <div className="w-full h-full text-white pb-4  shadow-2xl rounded-lg p-4 bg-blue-900">
      <div className="flex justify-center items-center">
        <span className="">
          {icon}
        </span>{" "}
      </div>
      <div className="flex items-center justify-center py-2">
        <h2 className="text-center  capitalize">{title}</h2>
      </div>
      <div className="flex items-center justify-center text-gray-300 ">
        <p className="text-center text-sm">
          {text}
          
        </p>{" "}
      </div>
    </div>
  );
};

export default VariationCard;
