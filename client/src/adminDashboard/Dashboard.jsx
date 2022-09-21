import React from "react";
import "./dashboard.css";
import SidBar from "./components/sidebar/SidBar";
import Topbar from "./components/topbars/Topbar";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="DashBoardContainer">
        <SidBar />
        <div className="others">Orther Pages</div>
      </div>
    </>
  );
};

export default Dashboard;
