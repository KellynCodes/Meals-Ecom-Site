import React from "react";
import "./widgetSmall.css";
import RiceAndMeat from "../../../images/riceandmeat.jpg";
import { Visibility } from "@material-ui/icons";

const WidgetSmall = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={RiceAndMeat} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Kennedy</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={RiceAndMeat} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Kennedy</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={RiceAndMeat} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Kennedy</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={RiceAndMeat} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Kennedy</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={RiceAndMeat} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Kennedy</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={RiceAndMeat} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Kennedy</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
