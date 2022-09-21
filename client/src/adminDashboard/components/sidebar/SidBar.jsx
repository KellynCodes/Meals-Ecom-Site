import React from "react";
import "./sidebar.css";
// import {LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

const SidBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarWrapper">
          <div className="sideBarMenu">
            <h3 className="">DashBoard</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                {/* <LineStyle /> */}
                Home
              </li>
              <li className="sideBarListItems">
                {/* <TimeLine /> */}
                Analytics
              </li>
              <li className="sideBarListItems">
                {/* <TrendingUp /> */}
                Sales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidBar;
