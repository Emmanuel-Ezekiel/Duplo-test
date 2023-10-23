import React from "react";
import "./main.scss";
import { Search } from "../../assets";
import { widgetData } from "../../utils/data";
import Widget from "./components/widget/widget";

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
          <Widget item={items} key={items.id}/>
        ))}
      </div>
      <div className="staticsContainer"></div>
      <div className="activityContainer"></div>
    </div>
  );
};

export default Main;
