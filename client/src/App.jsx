import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import { ToastContainer } from "react-toastify";
import Gemini from "./pages/Gemini";

const App = () => {
  return (
    <div className="w-full h-full">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/ideas" element={<Gemini />} />
      </Routes>
    </div>
  );
};

export default App;
