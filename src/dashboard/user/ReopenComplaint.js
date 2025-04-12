import React from 'react';

const ReopenComplaint = () => {
  return (
    <div style={containerStyle}>
      <h2>🔁 Reopen Complaint</h2>
      <p>If an issue still persists, reopen a previously resolved complaint.</p>
      <form style={{ marginTop: '1.5rem' }}>
        <input style={inputStyle} placeholder="Complaint ID" />
        <textarea style={inputStyle} placeholder="Why are you reopening this complaint?" rows="4" />
        <button style={buttonStyle}>Reopen</button>
      </form>
    </div>
  );
};

const containerStyle = {
  padding: '2rem',
  backgroundColor: '#212529',
  color: '#f8f9fa',
  minHeight: '100vh'
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  backgroundColor: '#343a40',
  color: '#f8f9fa',
  border: '1px solid #495057',
  borderRadius: '6px'
};

const buttonStyle = {
  padding: '0.8rem 1.5rem',
  backgroundColor: '#ffc107',
  color: '#212529',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default ReopenComplaint;
