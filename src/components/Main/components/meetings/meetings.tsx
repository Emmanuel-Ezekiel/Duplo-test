import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Meetings = ({ item }: any) => {
  return (
    <div className="meeting-content">
      <div className="box">
        <div className="date">
            <h4>{item.day}</h4>
            <span>{item.date}</span>
        </div>
        <div className="schedule">
            <h2>{item.task}</h2>
            <span>{item.time}</span>
        </div>
      </div>
      <div className="dot">
        < PiDotsThreeOutlineVerticalFill  />
      </div>
    </div>
  );
};

export default Meetings;
