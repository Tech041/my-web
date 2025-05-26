import React from "react";

const ServiceCard = ({ icon1, icon2, text1, text2, className }) => {
  return (
    <div className={className}>
      <div className="">{icon1}</div>
      <p className="font-bold text-lg py-4">{text1}</p>
      <p className="text-xs text-gray-500">{text2}</p>
      <div className="pt-3">{icon2}</div>
    </div>
  );
};

export default ServiceCard;
