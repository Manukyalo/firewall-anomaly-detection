import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Anomaly() {
  const [anomalyData] = useState([
    { id: 1, type: 'Type A', severity: 'High', detectedAt: '2023-10-01' },
    { id: 2, type: 'Type B', severity: 'Medium', detectedAt: '2023-10-02' },
    { id: 3, type: 'Type A', severity: 'Low', detectedAt: '2023-10-03' },
    { id: 4, type: 'Type C', severity: 'High', detectedAt: '2023-10-04' },
    { id: 5, type: 'Type B', severity: 'High', detectedAt: '2023-10-05' },
    { id: 6, type: 'Type A', severity: 'Medium', detectedAt: '2023-10-06' },
    { id: 7, type: 'Type C', severity: 'Low', detectedAt: '2023-10-07' },
    { id: 8, type: 'Type B', severity: 'Medium', detectedAt: '2023-10-08' },
    { id: 9, type: 'Type C', severity: 'High', detectedAt: '2023-10-09' },
    { id: 10, type: 'Type A', severity: 'Low', detectedAt: '2023-10-10' }
  ]);

  const handleAction = (action) => {
    alert(`${action} action completed!`);
  };

  // Mock data for the bar chart
  const barChartData = {
    labels: ['Type A', 'Type B', 'Type C'],
    datasets: [
      {
        label: 'Anomalies by Type',
        data: [4, 3, 3],
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)']
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Anomalies by Type' }
    },
    scales: {
      x: { title: { display: true, text: 'Anomaly Types' } },
      y: { title: { display: true, text: 'Count' } }
    }
  };

  return (
    <div className="anomaly">
      {/* Navigation Buttons */}
      <div className="anomaly__nav">
        <button onClick={() => handleAction('refresh')}>Refresh</button>
        <button onClick={() => handleAction('detect')}>Detect</button>
        <button onClick={() => handleAction('download')}>Download Report</button>
        <button onClick={() => handleAction('correct')}>Correct</button>
      </div>

      {/* Main Content - Table and Bar Chart Side-by-Side */}
      <div className="anomaly__content">
        {/* Table */}
        <div className="anomaly__table">
          <h3>Anomaly Data</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Severity</th>
                <th>Detected At</th>
              </tr>
            </thead>
            <tbody>
              {anomalyData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.type}</td>
                  <td>{item.severity}</td>
                  <td>{item.detectedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar Chart */}
        <div className="anomaly__chart">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Anomaly;
