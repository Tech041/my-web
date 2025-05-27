import React from "react";

const IdeaCard = ({ number, title, text, className, spanClass, onClick }) => {
  return (
    <div onClick={onClick} className={`${className} rounded-lg px-4`}>
      <div className="">
        <span className={`${spanClass} text-black`}>{number}</span>
      </div>
      <div className="">
        <h1 className=" text-lg font-bold">{title}</h1>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default IdeaCard;
