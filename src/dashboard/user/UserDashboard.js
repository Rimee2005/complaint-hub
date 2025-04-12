import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#212529', color: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>🎓 Welcome to Your Dashboard</h2>
      <p style={{ marginBottom: '2rem' }}>Submit and track your complaints here.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        <Link to="/user/complaint-form" style={cardStyle}>📝 File a Complaint</Link>
        <Link to="/user/complaint-list" style={cardStyle}>📋 View Complaints</Link>
        <Link to="/user/reopen-complaint" style={cardStyle}>🔁 Reopen Complaint</Link>
        <Link to="/user/add-comment" style={cardStyle}>💬 Add Comment</Link>
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

export default UserDashboard;

