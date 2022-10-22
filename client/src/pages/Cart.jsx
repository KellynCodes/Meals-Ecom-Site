import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart.products);
  return (
    <>
      <Nav />
      <div className="food_menu">
        {cart &&
          cart.products.map((cartsProducts) => (
            <div className="foods" key={cartsProducts.ducts._id}>
              <div className="food">
                <div className="food_img">
                  <img src={cartsProducts.ducts.img} alt="foods" />
                </div>

                <div className="food_description">
                  <h4>{cartsProducts.title}</h4>
                  <p> {cartsProducts.desc} </p>
                  <div className="cart">
                    <h3>
                      <i className="fa-solid fa-naira-sign"></i>
                      <span> {cartsProducts.price} </span>
                    </h3>
                    <div className="add_to_cart">
                      <FaTimes className="icon hover text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Link className="get_started" to="/dashboard">
        AdminPage
      </Link>
      <Footer />
    </>
  );
}

export default Cart;
