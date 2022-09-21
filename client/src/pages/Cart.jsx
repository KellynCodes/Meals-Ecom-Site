import React from "react";
import {
  BrowserRouter as ReactDom,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import AdminDashBoard from "../adminDashboard/components/topbars/Topbar";

function cart() {
  return (
    <>
      <Nav />
      <div className="food_menu">
        <div className="foods">
          <div className="food">
            <div className="food_img">
              <img src="images/img2.jpg" alt="foods" />
            </div>

            <div className="food_description">
              <h4>Jollof Rice and Chicken</h4>
              <p> Vero pariatur</p>
              <div className="cart">
                <h3>
                  <i className="fa-solid fa-naira-sign"></i>
                  <span>1,500</span>
                </h3>
                <div className="add_to_cart">
                  <i className="bi bi-cart3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="get_started" to="/AdminDashBoard">
        AdminPage
      </Link>
    </>
  );
}

export default cart;
