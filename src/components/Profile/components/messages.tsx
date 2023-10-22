import React from "react";

const Messages = ({ item }: any) => {
  return (
    <div className="MessageList">
      <div className="iconContainer">
        <img src={item.icon} alt="icons" />
      </div>
      <div className="name">
        <h2>{item.name}</h2>
        <span>{item.note}</span>
      </div>
    </div>
  );
};

export default Messages;
