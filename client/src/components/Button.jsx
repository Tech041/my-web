import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const Button = ({ children, iconClass, buttonClass }) => {
  return (
    <a href="#contact">
      <button className={buttonClass}>
        {children}{" "}
        <span className={iconClass}>
          <LuArrowUpRight />
        </span>
      </button>
    </a>
  );
};

export default Button;
