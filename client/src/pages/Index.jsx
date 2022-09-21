import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Register from "./Register";

import {
  BrowserRouter as ReactDom,
  Route,
  Routes,
  Link,
} from "react-router-dom";

//images
import Banana from "../images/banana.jpg";
import Food from "../images/img1.jpg";
import Food1 from "../images/banana.jpg";
import Food2 from "../images/img2.jpg";
import Food3 from "../images/img3.jpg";
import Logo from "../images/logo.jpg";
import Logo2 from "../images/logo2.jpg";
import NiceLogo from "../images/nicelogo.jpg";
import RiceAndMeat from "../images/riceandmeat.jpg";
import KellynCodes from "../images/kellyncodes.png";

function Index() {
  return (
    <>
      <Nav />
      {/* <!-- <====================home==================> --> */}

      <div className="home">
        <div className="left">
          <div className="home_desc">
            <h2>Delicious meals at your convenience</h2>
            <p>
              Order meals from us and we will have it delivered at your
              doorstep.
            </p>
          </div>
          <div className="button">
            <Link className="get_started" to="/Register">
              Get Started
            </Link>
            <Routes>
              <Route
                className="reg_btn"
                path="/register"
                element={<Register />}
              />
            </Routes>
          </div>

          <div className="search_bar">
            <label for="instantOrder">Instant Order</label>
            <div className="search">
              <i className="bi bi-search"></i>
              <input type="search" placeholder="Search For Meals" />
            </div>
          </div>
        </div>

        <div className="right">
          <img src={RiceAndMeat} alt="Hero-meal-image" />
        </div>

        <div className="chat_button">
          <i className="bi bi-chat-right-dots"></i>
        </div>
      </div>

      {/* <!-- ==================food menu======================= --> */}
      <div className="food_menu">
        <h1>MENU</h1>
        <ul>
          <div className="current_menu">
            <li>Current menu</li>
          </div>

          <div className="menu_nav">
            <a href="#" className="active">
              All
            </a>
            <a href="#">Rice</a>
            <a href="#">Beans</a>
            <a href="#">Fries</a>
            <a href="#">Swallow</a>
            <a href="#">Others</a>
          </div>
        </ul>

        <div className="foods">
          <div className="food">
            <div className="food_img">
              <img src={Food} alt="foods" />
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

          <div className="food">
            <div className="food_img">
              <img src={Food1} alt="foods" />
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

          <div className="food">
            <div className="food_img">
              <img src={Food2} alt="foods" />
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

          <div className="food">
            <div className="food_img">
              <img src={Food3} alt="foods" />
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

          <div className="food">
            <div className="food_img">
              <img src={Logo} alt="foods" />
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

          <div className="food">
            <div className="food_img">
              <img src={Banana} alt="foods" />
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

          <div className="food">
            <div className="food_img">
              <img src={Food1} alt="foods" />
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

          <div className="food">
            <div className="food_img">
              <img src={NiceLogo} alt="foods" />
            </div>

            <div className="food_description">
              <h4>Jollof Rice and Chicken</h4>
              <p>Lorem ipsum </p>

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

          <div className="food">
            <div className="food_img">
              <img src={Food2} alt="foods" />
            </div>

            <div className="food_description">
              <h4>Jollof Rice and Chicken</h4>
              <p>Lorem ipsum dolor</p>

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
        <div className="full_menu">
          <button type="button" className="full_menu_btn">
            Full Menu
          </button>
        </div>
      </div>
      {/* <!-- =====================testmonials section ================== --> */}
      <div className="testmonials_bg">
        <div className="testmonials">
          <div className="left">
            <div className="testmonials_desc">
              <h2>What our customers say about us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt blanditiis, veritatis necessitatibus aspernatur
                exercitationem tempora!
              </p>
            </div>
          </div>

          <div className="right">
            <div className="customer_profile">
              <img src={KellynCodes} alt="testimonial-customer-image" />
              <div className="profile_details">
                <h1>John Samson</h1>
                <p>ENUGU, NIGERIA</p>
              </div>
            </div>

            <div className="what_customer_said">
              <p>
                White dwarf a still more glorious dawn awaits tingling of rthe
                spine emerged into consciousness Vangells shores of the cosmic
                ocearn. Tendrils of gossamer clouds kinding the energy hidden in
                matter concept of the number on permanence.
              </p>
            </div>

            <div className="dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <div className="about_icon">
              <i className="bi bi-quote"></i>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ======================blog section================ --> */}

      <div className="blog_container">
        <div className="blog_header">
          <h1>Blog Our Latest News</h1>
          <p>
            Have you ever browsed food blogs like mine and wondered how to start
            a food blog of your very own?
          </p>
        </div>

        <div className="blogs">
          <div className="blog">
            <img src={Food3} alt="meals_image" />

            <div className="blog_description">
              <p>
                <b>Design</b> 01 Octover 2019
              </p>

              <h4>Better Tha Takeout Kung Pan Chicken</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                illum at repellendus asperiores iusto.
              </p>

              <a href="#">READ MORE</a>
            </div>
          </div>

          <div className="blog">
            <img src={Food2} alt="meals_image" />

            <div className="blog_description">
              <p>
                <b>Design</b> 01 Octover 2019
              </p>

              <h4>Better Tha Takeout Kung Pan Chicken</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                illum at repellendus asperiores iusto.
              </p>

              <a href="#">READ MORE</a>
            </div>
          </div>

          <div className="blog">
            <img src={Food2} alt="meals-image" />

            <div className="blog_description">
              <p>
                <b>Design</b> 01 Octover 2019
              </p>

              <h4>Better Tha Takeout Kung Pan Chicken</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                illum at repellendus asperiores iusto.
              </p>

              <a href="#">READ MORE</a>
            </div>
          </div>

          <div className="blog">
            <img src={Banana} alt="banana" />

            <div className="blog_description">
              <p>
                <b>Design</b> 01 Octover 2019
              </p>

              <h4>Better Tha Takeout Kung Pan Chicken</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                illum at repellendus asperiores iusto.
              </p>

              <a href="#">READ MORE</a>
            </div>
          </div>

          <div className="blog">
            <img src={Banana} alt="banana" />

            <div className="blog_description">
              <p>
                <b>Design</b> 01 Octover 2019
              </p>

              <h4>Better Tha Takeout Kung Pan Chicken</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                illum at repellendus asperiores iusto.
              </p>

              <a href="#">READ MORE</a>
            </div>
          </div>

          <div className="blog">
            <img src={Banana} alt="banana" />

            <div className="blog_description">
              <p>
                <b>Design</b> 01 Octover 2019
              </p>

              <h4>Better Tha Takeout Kung Pan Chicken</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                illum at repellendus asperiores iusto.
              </p>

              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- =============================footer section=================== --> */}
      <Footer />
    </>
  );
}

export default Index;
