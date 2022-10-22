import React from "react";
import "./featured.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,454</span>
          <span className="featuredRate">
            -22.44 <ArrowDownward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,454</span>
          <span className="featuredRate">
            -52.44 <ArrowDownward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,454</span>
          <span className="featuredRate">
            2.44 <ArrowUpward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
