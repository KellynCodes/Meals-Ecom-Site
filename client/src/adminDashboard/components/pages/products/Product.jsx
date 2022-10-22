import { Link as LinkIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import SidBar from "../../sidebar/SidBar";
import Topbar from "../../topbars/Topbar";
import Chart from "../../CHART/Chart";
import { ProductData } from "../../../../DummyData";
import "./product.css";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <>
      <Topbar />
      <div className="productContainer">
        <SidBar />
        <div className="product">
          <div className="productTileContainer">
            <h1 className="prodcutTitle">Product</h1>
            <Link to="/dashboard/products/new-product">
              <button className="productAddButton">Create</button>
              <LinkIcon />
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              {/* <Chart
                className="chartDaigram"
                data={ProductData}
                dataKey="Sales"
                title="Sales Performance"
              /> */}
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img
                  src="https://i.pinimg.com/550x/56/d2/6c/56d26c6090f23162d0aa6401eb4a7b06.jpg"
                  alt="ProductImg"
                  className="productInfoImg"
                />
                <span className="productName">Google</span>
              </div>
              <div className="productInfoBottom">
                <div className="productinfoItem">
                  <span className="productInfoKey">ID:</span>
                  <span className="productInfoValue">543</span>
                </div>
                <div className="productinfoItem">
                  <span className="productInfoKey">Sales:</span>
                  <span className="productInfoValue">45432</span>
                </div>
                <div className="productinfoItem">
                  <span className="productInfoKey">Active:</span>
                  <span className="productInfoValue">Yes</span>
                </div>
                <div className="productinfoItem">
                  <span className="productInfoKey">In Stock:</span>
                  <span className="productInfoValue">No</span>
                </div>
              </div>
            </div>
          </div>

          <div className="productBottom">
            <form action="" className="productForm">
              <div className="productFormLeft">
                <label htmlFor="productName">Product Name</label>
                <input
                  id="productName"
                  type="text"
                  placeholder="Apple Laptop"
                />

                <label htmlFor="instock">In Stock</label>
                <select name="instock" id="instock">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <label htmlFor="active">Active</label>
                <select name="active" id="active">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src="https://i.pinimg.com/550x/56/d2/6c/56d26c6090f23162d0aa6401eb4a7b06.jpg"
                    alt="product-upload-img"
                    className="productUploadImg"
                  />
                  <label htmlFor="file">
                    <Publish />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="productButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
