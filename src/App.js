import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// Dashboard Pages
import AdminDashboard from "./dashboard/admin/AdminDashboard";
import ComplaintManagement from "./dashboard/admin/ComplaintManagement";
import AssignStaff from "./dashboard/admin/AssignStaff";
import TrackStatus from "./dashboard/admin/TrackStatus";
import Profile from "./dashboard/admin/Profile";
import UserDashboard from "./dashboard/user/UserDashboard";
import ComplaintForm from "./dashboard/user/ComplaintForm";
import ComplaintList from "./dashboard/user/ComplaintList";
import ReopenComplaint from "./dashboard/user/ReopenComplaint";
import AddComment from "./dashboard/user/AddComment";
import StaffDashboard from "./dashboard/staff/StaffDashboard";
import AssignedComplaints from "./dashboard/staff/AssignedComplaints";
import UpdateStatus from "./dashboard/staff/UpdateStatus";


// Components (if needed globally)
import Navbar from "./components/Navbar";
import Signup from "./Pages/Signup";

// Dummy placeholders for dashboards (if needed later)
// import UserDashboard from "./dashboards/user/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={< Signup />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/complaint-management" element={<ComplaintManagement />} />
        <Route path="/admin/assign-staff" element={<AssignStaff />} />
        <Route path="/admin/track-status" element={<TrackStatus />} />
        <Route path="/admin/profile" element={<Profile />} />

        {/* User Dashboard Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/complaint-form" element={<ComplaintForm />} />
        <Route path="/user/complaint-list" element={<ComplaintList />} />
        <Route path="/user/reopen-complaint" element={<ReopenComplaint />} />
        <Route path="/user/add-comment" element={<AddComment />} />

        {/* Staff Dashboard Routes */}
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/staff/assigned-complaints" element={<AssignedComplaints />} />
        <Route path="/staff/update-status" element={<UpdateStatus />} />
      
      </Routes>
    </Router>
  );
}

export default App;
