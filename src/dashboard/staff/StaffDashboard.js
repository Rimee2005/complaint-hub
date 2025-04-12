import React from 'react';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#212529', color: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>🧰 Welcome to Staff Dashboard</h2>
      <p style={{ marginBottom: '2rem' }}>Manage complaints assigned to you and update their status.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        <Link to="/staff/assigned-complaints" style={cardStyle}>📂 Assigned Complaints</Link>
        <Link to="/staff/update-status" style={cardStyle}>✅ Update Complaint Status</Link>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#343a40',
  color: '#f8f9fa',
  padding: '1.5rem',
  textAlign: 'center',
  borderRadius: '10px',
  textDecoration: 'none',
  fontSize: '1.1rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
};

export default StaffDashboard;
