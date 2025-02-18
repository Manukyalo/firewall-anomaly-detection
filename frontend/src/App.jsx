import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Anomaly from "./components/Anomaly/Anomaly.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Signup from "./pages/signupLogin.jsx";
import Footer from "./components/Footer.jsx";

import { useAuthStore } from "./Store/useAuthstore.js";

import "./App.css";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore(); // Get authUser from the store

  useEffect(() => {
    checkAuth(); // Check authentication status when the app loads
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <div className="loader"></div>; // Show a loader while checking auth status
  }

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          {/* Route for Sign In */}
          <Route
            path="/signin"
            element={!authUser ? <Signup /> : <Navigate to="/" />}
          />

          {/* Protected Route for Dashboard */}
          <Route
            path="/"
            element={authUser ? <Dashboard /> : <Navigate to="/signin" />}
          />

          {/* Protected Route for Anomaly */}
          <Route
            path="/anomaly"
            element={authUser ? <Anomaly /> : <Navigate to="/signin" />}
          />

          {/* Protected Route for Settings */}
          <Route
            path="/settings"
            element={authUser ? <Settings /> : <Navigate to="/signin" />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
