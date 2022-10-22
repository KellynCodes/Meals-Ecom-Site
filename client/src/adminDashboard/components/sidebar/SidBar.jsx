import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  AttachMoney,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const SidBar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarWrapper">
          <div className="sideBarMenu">
            <h3 className="">DashBoard</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                <LineStyle className="sideBarIcons" />
                <Link className="link" to="/dashboard">
                  Home
                </Link>
              </li>
              <li className="sideBarListItems">
                <Timeline className="sideBarIcons" />
                Analytics
              </li>
              <li className="sideBarListItems">
                <TrendingUp className="sideBarIcons" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sideBarMenu">
            <h3 className="">Quick Menu</h3>
            <ul className="sideBarList">
              <Link className="link" to="/dashboard/users">
                <li className="sideBarListItems">
                  <PersonOutline className="sideBarIcons" />
                  Users
                </li>
              </Link>
              <Link className="link" to="/dashboard/products">
                <li className="sideBarListItems">
                  <Storefront className="sideBarIcons" />
                  Products
                </li>
              </Link>
              <li className="sideBarListItems">
                <AttachMoney className="sideBarIcons" />
                Transactions
              </li>
              <li className="sideBarListItems">
                <TrendingUp className="sideBarIcons" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sideBarMenu">
            <h3 className="">Notifications</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                <LineStyle className="sideBarIcons" />
                Mail
              </li>
              <li className="sideBarListItems">
                <Timeline className="sideBarIcons" />
                FeedBack
              </li>
              <li className="sideBarListItems">
                <TrendingUp className="sideBarIcons" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sideBarMenu">
            <h3 className="">Staff</h3>
            <ul className="sideBarList">
              <li className="sideBarListItems">
                <LineStyle className="sideBarIcons" />
                Manage
              </li>
              <li className="sideBarListItems">
                <Timeline className="sideBarIcons" />
                Analytics
              </li>
              <li className="sideBarListItems">
                <TrendingUp className="sideBarIcons" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidBar;
