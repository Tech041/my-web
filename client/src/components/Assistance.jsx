import React from "react";
import { Link } from "react-router-dom";

const Assistance = () => {
  return (
    <Link
      to={"/ideas"}
      className="text-white text-base bg-gradient-to-l from-blue-900 to-blue-300 px-4 md:px-6  py-2 flex justify-center item-center gap-1  mt-2 font-semibold"
    >
      Generate Ideas Here
    </Link>
  );
};

export default Assistance;
