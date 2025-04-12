import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Replace useHistory with useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic (API call)
    if (email === 'admin@complainthub.com' && password === 'password') {
      // If login is successful, redirect to the Admin dashboard
      navigate('/admin/dashboard');  // navigate to admin dashboard
    } else if (email === 'staff@complainthub.com' && password === 'password') {
      // Staff dashboard ke liye redirect
      navigate('/staff/dashboard');
    } else if (email === 'user@complainthub.com' && password === 'password') {
      // User dashboard ke liye redirect
      navigate('/user/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#212529', color: '#f8f9fa', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#343a40', borderRadius: '8px', padding: '40px', width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4" style={{ color: '#f8f9fa' }}>Login to Complaint Hub</h2>

        {/* Error Message */}
        {error && <div style={{ color: '#dc3545', marginBottom: '20px' }}>{error}</div>}

        <form onSubmit={handleLogin}>
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
          
          <div className="d-flex justify-content-between mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/forgot-password" style={{ color: '#007bff' }}>Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3" style={{ color: '#f8f9fa' }}>
          <p>Don't have an account? <a href="/signup" style={{ color: '#007bff' }}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
