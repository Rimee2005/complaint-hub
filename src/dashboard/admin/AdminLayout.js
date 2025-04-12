import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{
        width: '220px',
        background: '#2c3e50',
        color: '#ecf0f1',
        paddingTop: '80px', // Push down to avoid navbar overlap
        position: 'fixed',
        top: '140px',
        bottom: '50px',
        left: 0,
        boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
        borderTopRightRadius: '20px',    // top right curve
        borderBottomRightRadius: '20px'  // bottom right curve
      }}>
        <h2 style={{
          fontSize: '20px',
          textAlign: 'center',
          marginBottom: '40px',
          fontWeight: 'bold',
          color: '#1abc9c'
        }}>Admin Panel</h2>

        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          alignItems: 'center'
        }}>
          <SidebarLink to="/admin/dashboard" active={location.pathname === '/admin/dashboard'}>Dashboard</SidebarLink>
          <SidebarLink to="/admin/complaint" active={location.pathname === '/admin/complaint'}>Complaints</SidebarLink>
          <SidebarLink to="/admin/staff" active={location.pathname === '/admin/staff'}>Staff</SidebarLink>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '220px',
        padding: '100px 30px 30px', // Top padding to avoid navbar overlap
        backgroundColor: '#f4f7f8',
        minHeight: '100vh',
        width: '100%'
      }}>
        <Outlet />
      </div>
    </div>
  );
};

// Styled Sidebar Link
const SidebarLink = ({ to, active, children }) => (
  <Link
    to={to}
    style={{
      color: active ? '#1abc9c' : '#ecf0f1',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '15px',
      width: '70%',
      textAlign: 'center',
      padding: '10px 0',
      backgroundColor: active ? 'rgba(26, 188, 156, 0.2)' : 'transparent',
      borderRadius: '6px',
      transition: '0.3s ease'
    }}
  >
    {children}
  </Link>
);

export default AdminLayout;
