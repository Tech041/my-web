import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Dymanic imports
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Messages = React.lazy(() => import("./pages/Messages"));
const Gemini = React.lazy(() => import("./pages/Gemini"));

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
