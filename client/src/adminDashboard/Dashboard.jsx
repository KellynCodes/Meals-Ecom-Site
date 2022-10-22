import React from "react";
import "./dashboard.css";
import SidBar from "./components/sidebar/SidBar";
import Topbar from "./components/topbars/Topbar";
import Home from "./components/pages/Home/Home";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="DashBoardContainer">
        <SidBar />
        <Home />
      </div>
    </>
  );
};

export default Dashboard;
