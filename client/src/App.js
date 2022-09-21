import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import AdminDashBoard from "./adminDashboard/Dashboard";
import { BrowserRouter as ReactDom, Route, Routes } from "react-router-dom";

import "./css/boot.css";
import "./css/index.css";
import "./css/RegisterAndLogin.css";

function App() {
  return (
    <>
      <ReactDom>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
        </Routes>
      </ReactDom>
    </>
  );
}

export default App;
