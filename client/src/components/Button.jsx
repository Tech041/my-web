import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const Button = ({ children, iconClass, buttonClass }) => {
  return (
    <button className={buttonClass}>
      {children}{" "}
      <span className={iconClass}>
        <LuArrowUpRight />
      </span>
    </button>
  );
};

export default Button;
