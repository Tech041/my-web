import React, { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";
import { useNavigate, Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";

import { AppContext } from "../context/AppContext";

const Messages = () => {
  const [newMessages, setNewMessages] = useState([]);
  const { token, setToken } = useContext(AppContext);

  const navigate = useNavigate();

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const fetchAllMessages = async () => {
    const res = await axios.get(serverUrl + "/api/message/get");
    if (res.data.success) {
      console.log(res.data.allMessages);
      setNewMessages(res.data.allMessages);
      setToken(localStorage.getItem("token"));
      if (!token) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    fetchAllMessages();
  }, []);

  return (
    <div className=" pt-20 w-full h-full ">
      <div className="p-4">
        <div className=" mb-4">
          <Link to={"/"} className="mb-5 pb-4 w-full h-full ">
            <IoChevronBackSharp size={30} color="black" />
          </Link>
        </div>
        <h1 className="">All messages</h1>
        <div className="">
          {newMessages?.map((message) => (
            <Message key={message._id} messages={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
