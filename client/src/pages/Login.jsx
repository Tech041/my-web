import React, { useContext, useEffect } from "react";
import axios from "axios";
import { FaTable } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        return setEmailError("Email is required");
      } else {
        setEmailError("");
        setEmail("");
      }
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const res = await axios.post(serverUrl + "/api/admin/login", data);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/messages");
    }
  }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
