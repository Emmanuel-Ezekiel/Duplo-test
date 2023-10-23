import React from "react";
import Menu from "../components/Menu/menu";
import Profile from "../components/Profile/profile";
import Main from "../components/Main/main";

import "../styles/dashboard.scss";
const Dashboard = () => {
  return (
    <div className="main">
      <Menu />
      <Main />
      <Profile />
    </div>
  );
};

export default Dashboard;
