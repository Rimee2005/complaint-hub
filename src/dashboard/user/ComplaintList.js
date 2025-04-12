import React from 'react';

const ComplaintList = () => {
  return (
    <div style={containerStyle}>
      <h2>📋 Your Complaints</h2>
      <p>Here is the list of complaints you’ve submitted.</p>
      <ul style={listStyle}>
        <li style={itemStyle}>#001 - Streetlight not working - Status: In Progress</li>
        <li style={itemStyle}>#002 - Water leakage in hostel - Status: Resolved</li>
      </ul>
    </div>
  );
};

const containerStyle = {
  padding: '2rem',
  backgroundColor: '#212529',
  color: '#f8f9fa',
  minHeight: '100vh'
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: 0,
  marginTop: '1.5rem'
};

const itemStyle = {
  backgroundColor: '#343a40',
  padding: '1rem',
  borderRadius: '6px',
  marginBottom: '1rem',
  borderLeft: '5px solid #007bff'
};

export default ComplaintList;
