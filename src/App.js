import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Anomaly from './components/Anomaly/Anomaly';
import Settings from './components/Settings/Settings';
import './App.scss';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/anomaly" element={<Anomaly />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
