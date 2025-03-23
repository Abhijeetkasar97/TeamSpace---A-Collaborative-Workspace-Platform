import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to TeamSpace</h2>
      <p className="dashboard-description">
        Collaborate with your team efficiently, track tasks, and communicate seamlessly.
      </p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Task Management</h3>
          <p>Organize and track your tasks easily.</p>
        </div>
        <div className="dashboard-card">
          <h3>Real-Time Chat</h3>
          <p>Stay connected with your team instantly.</p>
        </div>
        <div className="dashboard-card">
          <h3>Video Meetings</h3>
          <p>Conduct high-quality video conferences.</p>
        </div>
        <div className="dashboard-card">
          <h3>Analytics</h3>
          <p>Monitor performance with powerful insights.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
