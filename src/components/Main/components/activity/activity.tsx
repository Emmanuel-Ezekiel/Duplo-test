import React from "react";

const Activity = ({ item }: any) => {
  return (
    <div className="content">
      <div className="content-box">
        <img src={item.icon} alt="icon" />
        <div className="info">
          <h2 dangerouslySetInnerHTML={{ __html: item.note }} />
          <span>{item.time}</span>
        </div>
      </div>

      <button
        style={{
          border: "none",
          backgroundColor: item.color,
          opacity: 0.9,
          width: 80,
          height: 30,
          borderRadius: 10,
          color: `rgba(${item.color}, 0.2)`,
          fontSize: "10px",
          fontWeight: 500
        }}
      >
        {item.status}
      </button>
    </div>
  );
};

export default Activity;
