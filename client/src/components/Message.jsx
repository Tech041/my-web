import React from "react";

const Message = ({ messages }) => {
  return (
    <div className="py-5">
      <p className="  ">
        <span className="px-4">Name:</span>
        <span className="">{messages.name}</span>
      </p>
      <p className="  ">
        <span className="px-4">Email:</span>
        <span className="">{messages.email}</span>
      </p>
      <p className="  ">
        <span className="px-4">Message:</span>
        <span className="">{messages.message}</span>
      </p>
    </div>
  );
};

export default Message;
