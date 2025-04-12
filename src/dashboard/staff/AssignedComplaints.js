import React from 'react';

const AssignedComplaints = () => {
  // Dummy data for now
  const complaints = [
    { id: 'C101', title: 'Broken Street Light', status: 'Pending' },
    { id: 'C102', title: 'Water Leakage', status: 'In Progress' },
    { id: 'C103', title: 'Garbage not collected', status: 'Resolved' },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>📂 Assigned Complaints</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((comp) => (
            <tr key={comp.id}>
              <td>{comp.id}</td>
              <td>{comp.title}</td>
              <td>{comp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const containerStyle = {
  padding: '2rem',
  backgroundColor: '#212529',
  color: '#f8f9fa',
  minHeight: '100vh',
};

const headingStyle = {
  marginBottom: '1.5rem',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#343a40',
};

tableStyle.th = tableStyle.td = {
  border: '1px solid #dee2e6',
  padding: '0.75rem',
  textAlign: 'left',
};

export default AssignedComplaints;
