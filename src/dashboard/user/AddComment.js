import React from 'react';

const AddComment = () => {
  return (
    <div style={containerStyle}>
      <h2>💬 Add Comment</h2>
      <p>Give additional input on your existing complaint.</p>
      <form style={{ marginTop: '1.5rem' }}>
        <input style={inputStyle} placeholder="Complaint ID" />
        <textarea style={inputStyle} placeholder="Add your comment..." rows="4" />
        <button style={buttonStyle}>Submit Comment</button>
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
  backgroundColor: '#17a2b8',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default AddComment;
