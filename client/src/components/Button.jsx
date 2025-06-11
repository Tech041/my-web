import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const Button = ({ children, iconClass, buttonClass, href }) => {
  return (
    <a href={href}>
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
