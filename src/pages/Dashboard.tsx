import React from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import Menu from "../components/Menu/menu";
import Profile from "../components/Profile/profile";

import "../styles/dashboard.scss";
const Dashboard = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <Menu />
      </div>
      <Profile/>
    </div>
  );
};

export default Dashboard;
