import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with actual auth logic

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
