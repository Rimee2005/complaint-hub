import React, { useState } from 'react';

const UpdateStatus = () => {
  const [complaintId, setComplaintId] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add backend call here
    alert(`Status for Complaint ID ${complaintId} updated to "${newStatus}"`);
    setComplaintId('');
    setNewStatus('');
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: '1.5rem' }}>✅ Update Complaint Status</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Complaint ID:
          <input
            type="text"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
            required
            style={inputStyle}
          />
        </label>
        <label>
          New Status:
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">Select Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="On Hold">On Hold</option>
          </select>
        </label>
        <button type="submit" style={buttonStyle}>Update Status</button>
      </form>
    </div>
  );
};

const containerStyle = {
  padding: '2rem',
  backgroundColor: '#212529',
  color: '#f8f9fa',
  minHeight: '100vh',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
};

const inputStyle = {
  marginBottom: '1rem',
  padding: '0.5rem',
  borderRadius: '5px',
  border: 'none',
};

const buttonStyle = {
  padding: '0.75rem',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default UpdateStatus;
