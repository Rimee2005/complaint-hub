// src/dashboards/admin/AdminLayout.js

import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '220px',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '20px',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh'
      }}>
        <h2 style={{ fontSize: '22px', marginBottom: '30px' }}>Admin Panel</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link to="/admin/dashboard" style={getLinkStyle(location.pathname === '/admin/dashboard')}>Dashboard</Link>
          <Link to="/admin/complaint" style={getLinkStyle(location.pathname === '/admin/complaint')}>Complaints</Link>
          <Link to="/admin/staff" style={getLinkStyle(location.pathname === '/admin/assign-staff')}>Staff</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '220px', padding: '30px', flexGrow: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

const getLinkStyle = (isActive) => ({
  color: isActive ? '#1abc9c' : '#ecf0f1',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px'
});

export default AdminLayout;

