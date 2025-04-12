import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>📊 Admin Dashboard</h2>

      <div style={dashboardGrid}>
        <div style={cardStyle}>📌 Card 1</div>
        <div style={cardStyle}>📌 Card 2</div>
        <div style={cardStyle}>📌 Card 3</div>
        <div style={cardStyle}>📌 Card 4</div>
      </div>
    </div>
  );
};

const dashboardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1.5rem',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#343a40',
};

export default Dashboard;
