import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Replace useHistory with useNavigate

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder for signup logic (API call)
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      // If signup is successful, redirect to the login page
      navigate('/login');  // Use navigate instead of history.push
    }
  };

  return (
    <div style={{ backgroundColor: '#212529', color: '#f8f9fa', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#343a40', borderRadius: '8px', padding: '40px', width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4" style={{ color: '#f8f9fa' }}>Sign Up</h2>

        {/* Error Message */}
        {error && <div style={{ color: '#dc3545', marginBottom: '20px' }}>{error}</div>}

        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: '#495057', color: '#f8f9fa' }}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ backgroundColor: '#495057', color: '#f8f9fa' }}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ backgroundColor: '#495057', color: '#f8f9fa' }}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        <div className="text-center mt-3" style={{ color: '#f8f9fa' }}>
          <p>Already have an account? <a href="/login" style={{ color: '#007bff' }}>Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
