import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
const Messages = () => {
  const [newMessages, setNewMessages] = useState([]);
  const { token } = useContext(AppContext);

  const navigate = useNavigate();

  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const fetchAllMessages = async () => {
    const res = await axios.get(serverUrl + "/api/message/get");
    if (res.data.success) {
      console.log(res.data.allMessages);
      setNewMessages(res.data.allMessages);
      toast.success("Messages are fetched");
    } else {
      toast.error("Error fetching messages!");
    }
  };

  useEffect(() => {
    fetchAllMessages();
  }, []);
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className=" pt-20">
      <div className="">
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
