import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const navStyle = {
    padding: '10px 20px'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={navStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ fontWeight: 'bold', fontSize: '24px' }}>
          Complaint Hub
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            {/* You can add more nav-links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
