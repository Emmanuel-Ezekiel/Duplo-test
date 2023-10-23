import React from "react";
import "./main.scss";
import { Search } from "../../assets";
import { widgetData, activityData, meetingsData } from "../../utils/data";
import Widget from "./components/widget/widget";
import { IoIosArrowDown } from "react-icons/io";
import Activity from "./components/activity/activity";
import Meetings from "./components/meetings/meetings";

const Main = () => {
  return (
    <div className="main-container">
      <div className="header">
        <div className="head">
          <h1>Dashboard</h1>
          <p>Hello, Thomas. Welcome to Galucter</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search by anything" />
          <button>{Search()}</button>
        </div>
      </div>

      <div className="widgetContainer">
        {widgetData.map((items) => (
          <Widget item={items} key={items.id} />
        ))}
      </div>
      <div className="staticsContainer"></div>
      <div className="buttomContainer">
        <div className="activity">
          <div className="headers">
            <h1>Activity Feed</h1>
            <button>
              {" "}
              All Activity
              <IoIosArrowDown />
            </button>
          </div>
          {activityData.map((items) => (
            <Activity item={items} key={items.id} />
          ))}
        </div>
        <div className="meetings">
          <div className="headers">
            <h1>Meetings</h1>
            <button>
              {" "}
              Create new
              <IoIosArrowDown />
            </button>
          </div>
          {meetingsData.map((items) => (
            <Meetings item={items} key={items.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
