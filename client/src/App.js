import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import AdminDashBoard from "./adminDashboard/Dashboard";
import {
  BrowserRouter as ReactDom,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./css/boot.css";
import "./css/index.css";
import "./css/RegisterAndLogin.css";
import UserList from "./adminDashboard/components/pages/userList/UserList";
import User from "./adminDashboard/components/pages/user/User";
import NewUser from "./adminDashboard/components/pages/newUser/NewUser";
import ProductList from "./adminDashboard/components/pages/productList/ProductList";
import Product from "./adminDashboard/components/pages/products/Product";
import NewProduct from "./adminDashboard/components/pages/newProducts/NewProduct";
import { useSelector } from "react-redux";
import AdminLogin from "./adminDashboard/components/pages/AdminLogin";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <ReactDom>
        <Routes>
          <Route path="*" element={<Index />} />
          <Route
            path="/Login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/dashboard/Login/"
            element={user ? <Navigate to="/dashboard" /> : <AdminLogin />}
          />
          <Route
            path="/Register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<AdminDashBoard />} />
          <Route path="/dashboard/users" element={<UserList />} />
          <Route path="/dashboard/users/:userId" element={<User />} />
          <Route path="/dashboard/users/new/users" element={<NewUser />} />
          <Route path="/dashboard/products" element={<ProductList />} />
          <Route path="/dashboard/products/:productId" element={<Product />} />
          <Route
            path="/dashboard/products/new-product"
            element={<NewProduct />}
          />
        </Routes>
      </ReactDom>
    </>
  );
}

export default App;
