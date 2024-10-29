import React from 'react';
import Card from './Card';
import Chart from './Chart';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__cards">
        <div className="dashboard__card-heading">
          <h1>System Performance</h1>
        </div>
        <div className="dashboard__card">
          <Card title="Total Package Processed" total="45"/>
          <Card title="Anomaly Predicted" total="43"/>
          <Card title="Firewall Status" total="Active"/>
        </div>
      </div>
      <div className="dashboard__chart">
        <h1>Real time Anomaly detection</h1>
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
