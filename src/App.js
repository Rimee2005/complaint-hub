import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";

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
      </Routes>
    </Router>
  );
}

export default App;
