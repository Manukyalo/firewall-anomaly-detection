import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar__title">Firewall Optimizer System</h1>
      <nav className="navbar__links">
        <Link to="/" className="navbar__link">Dashboard</Link>
        <Link to="/anomaly" className="navbar__link">Anomaly</Link>
        <Link to="/settings" className="navbar__link">Settings</Link>
      </nav>
    </header>
  );
}

export default Navbar;
