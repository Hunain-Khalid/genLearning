import React from "react";
import SideBar from "./sidebar";
import Users from "./users";
import Posts from "./posts";
import { Route } from "react-router-dom";

// We need the links in a serperate file called,
// sidebar.jsx
// remember react only useful for rendering
// UI elements hence UI with UI, logic with logic?
// no just clearer/cleaner code, now we only have
// sidebad instead of whats insdie sidebar

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar />
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
  );
};

export default Dashboard;
