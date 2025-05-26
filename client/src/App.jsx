import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full h-full">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
};

export default App;
