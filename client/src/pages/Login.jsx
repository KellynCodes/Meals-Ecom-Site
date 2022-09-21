import React from "react";
import {
  BrowserRouter as ReactDom,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Register from "./Register";
import Nav from "./Nav";
import Footer from "./Footer";

function login() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5 mb-5 card p-5 offset-3">
            <h2 className="text-center mb-5">Meals Login Page</h2>
            <form action="register.html">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
              />
              <div className="password_container">
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                />
                <i className="bi bi-password"></i>
              </div>

              <div className="button_container">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
              <div className="reg">
                <p>Already Have An Account</p>
                <Link className="reg_btn" to="/Register">
                  Register
                </Link>
                <Routes>
                  <Route
                    className="reg_btn"
                    path="/register"
                    element={<Register />}
                  />
                </Routes>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default login;
