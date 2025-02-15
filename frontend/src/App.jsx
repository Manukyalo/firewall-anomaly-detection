import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Anomaly from './components/Anomaly/Anomaly.jsx';
import Settings from './components/Settings/Settings.jsx';
import Signup from '../pages/signupLogin.jsx'
import Footer from './components/Footer.jsx';
import useAuthstore from './store/useAuthstore.js';
import './App.css';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthstore(); // Ensure consistent naming

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <div className="loader"></div>;
  }

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/signin" element={!authUser ? <Signup /> : <Navigate to="/" />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/anomaly" element={<Anomaly />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
