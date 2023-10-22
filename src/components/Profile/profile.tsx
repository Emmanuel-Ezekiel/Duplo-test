import React from "react";
import "./profile.scss";
import { notification, help } from "../../assets";
import { messages, jobs } from "../../utils/data";
import Messages from "./components/messages";
const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="notification">
        {help()}
        {notification()}
        <div className="profileImg">
          <img src="/svg/profile.svg" alt="profileImg" />
        </div>
      </div>
      <div className="profile">
        <img src="/svg/profile.svg" alt="profileImg" />
        <div className="nameContainer">
          <h1>Thomas Flecture</h1>
          <span>Director of Recruiting</span>
        </div>
      </div>
      <div className="messageContainer">
        <h1>Messages</h1>
        {messages.map((items) => (
          <Messages key={items.id} item={items}/>
        ))}
      </div>
      <div className="messageContainer">
        <h1>Recent Added Jobs</h1>
        {jobs.map((items) => (
          <Messages key={items.id} item={items}/>
        ))}
      </div>
    </div>
  );
};

export default Profile;
