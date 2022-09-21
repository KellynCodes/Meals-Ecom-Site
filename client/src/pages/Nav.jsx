import React from "react";
import Logo2 from "../images/logo2.jpg";
import Cart from "./Cart";
import Index from "./Index";
import Login from "./Login";
import Register from "./Register";
import { BsSearch } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";

import {
  BrowserRouter as ReactDom,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";

function Nav() {
  const { isMobile, setIsMobile } = useState(true);
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <Link to="/" className="logo_text">
            <div className="img">
              <img src={Logo2} alt="" />
            </div>
            <h1 className="logo_text">Meals</h1>
          </Link>
          <Routes>
            <Route path="/cart" element={<Index />} />
          </Routes>
        </div>

        <div className={isMobile ? " isMobile" : "navlinks"}>
          <ul>
            <li>
              <i className="bi bi-house-door"></i>
              <Link to="/" className="active">
                Home
              </Link>
              <Routes>
                <Route path="/cart" element={<Index />} />
              </Routes>
            </li>
            <li>
              <i className="bi bi-basket2-fill"></i>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <i className="bi bi-cart3"></i>
              <a href="#mytray">My Tray</a>
            </li>
            <li>
              <i className="bi bi-journal-album"></i>
              <a href="#mealplans">MealPlans</a>
            </li>
          </ul>
        </div>

        <div className="search_nav">
          <ul>
            <ul className="icons">
              <li>
                <i>
                  <BsSearch className="bi-search" />
                </i>
              </li>
              <li>
                <Link to="/cart">
                  <span className="cart_nums">
                    <h5>10</h5>
                  </span>
                  <i>
                    <FaCartArrowDown className="fa-cart" />
                  </i>
                </Link>
                <Routes>
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </li>
            </ul>

            <div className="registration">
              <a href="" className="active open-on-small-screen">
                Create Account
              </a>
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="create_account">
                Create Account
              </Link>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </ul>
        </div>
        <div className="harmburgar_menu">
          <div className="cart">
            <Link to="/cart">
              <i>
                <FaCartArrowDown className="fa-cart" />
              </i>
            </Link>
            <Routes>
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <div
            style={
              isMobile === false
                ? { background: "red" }
                : { background: "blue" }
            }
            className="navbar_toggle"
            onClick={() => {
              setIsMobile(true);
            }}
          >
            {isMobile ? (
              <i className="fas fa-times">Close</i>
            ) : (
              <i className="fas fa-bars">Menu</i>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
