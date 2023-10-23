import React from "react";
import RadialBar from "../charts/radialBar";
const Widget = ({ item }: any) => {
  return (
    <div className="widgetBox">
      <div className="right">
        <h3>{item.name}</h3>
        <h2>{item.total}</h2>
        <div className="circle">
          <div
            style={{
              backgroundColor: item.color,
              opacity: 0.5,
              width: 25,
              height: 25,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {item.icon}
          </div>{" "}
          <span>+14% Inc</span>
        </div>
      </div>
      <RadialBar color={item.color} />
    </div>
  );
};

export default Widget;
