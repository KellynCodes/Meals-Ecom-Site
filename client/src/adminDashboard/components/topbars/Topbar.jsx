import React from "react";
import "./topbar.css";
import {} from "react-icons";
import FoodImage from "../../../images/riceandmeat.jpg";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MealsAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            Alerm
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            LanG
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">Setting</div>
          <img src={FoodImage} alt="User Avater" className="topAvater" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
