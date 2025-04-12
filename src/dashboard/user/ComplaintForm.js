import React from 'react';

const ComplaintForm = () => {
  return (
    <div style={containerStyle}>
      <h2>📝 Register a Complaint</h2>
      <p>Fill in the details below to register your issue.</p>
      <form style={{ marginTop: '1.5rem' }}>
        <input style={inputStyle} placeholder="Title of Complaint" />
        <textarea style={inputStyle} placeholder="Describe your issue..." rows="5" />
        <button style={buttonStyle}>Submit</button>
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
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default ComplaintForm;
