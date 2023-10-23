import React from "react";
import "./main.scss";
import { Search } from "../../assets";
import { widgetData, activityData, meetingsData } from "../../utils/data";
import Widget from "./components/widget/widget";
import { IoIosArrowDown } from "react-icons/io";
import Activity from "./components/activity/activity";
import Meetings from "./components/meetings/meetings";
import BarChart from "./components/charts/Bar";

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
      <div className="staticsContainer">
        <div className="headers">
          <h1>Statistics of active Applications</h1>

          <div className="switch-container">
            <div className="switchBox">
              <div className="switch">
                <input type="checkbox" id="toggle" />
                <label className="slider" htmlFor="toggle"></label>
              </div>
              <span>Applications</span>
            </div>
            <div className="switchBox">
              <div className="switch2">
                <input type="checkbox" id="toggle" />
                <label className="slider" htmlFor="toggle"></label>
              </div>
              <span>Shortlisted</span>
            </div>
            <div className="switchBox">
              <div className="switch3">
                <input type="checkbox" id="toggle" />
                <label className="slider" htmlFor="toggle"></label>
              </div>
              <span>Rejected</span>
            </div>
          </div>
          <button>
            {" "}
            Month
            <IoIosArrowDown />
          </button>
        </div>
        <BarChart />
      </div>
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
