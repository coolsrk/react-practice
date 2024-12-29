import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Outlet /> {/* This is where the nested routes will be rendered */}
    </div>
  );
};

export default Dashboard;
