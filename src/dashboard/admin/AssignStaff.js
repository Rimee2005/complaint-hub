import React from "react";

const AssignStaff = () => {
  return (
    <div style={{ padding: "2rem", color: "#f8f9fa", backgroundColor: "#212529", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>👷 Assign Staff</h2>
      <p>Assign a staff member to handle a specific complaint efficiently.</p>

      <div style={{ marginTop: "2rem" }}>
        <h4>Assign Staff to Complaints</h4>
        <p>(Staff and complaint lists will be loaded here dynamically.)</p>
        {/* Placeholder UI */}
        <div style={{ backgroundColor: "#343a40", padding: "1rem", borderRadius: "8px" }}>
          <p>No assignment options available right now.</p>
        </div>
      </div>
    </div>
  );
};

export default AssignStaff;
