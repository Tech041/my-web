import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
  return (
    <div className="fixed p-3 rounded-full bg-green-700 bottom-4 right-2 z-40">
      <a href="https://wa.link/cfop30" target="_blank" className="">
        <span className=" ">
          <FaWhatsapp size={20} color="white" />
        </span>
      </a>
    </div>
  );
};

export default Whatsapp;
