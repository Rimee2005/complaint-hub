import React from "react";

const Staff = () => {
  const staff = [
    { id: 1, name: "Amit Sharma", department: "Electrical", assignedWork: "Fix street light" },
    { id: 2, name: "Priya Verma", department: "Water Supply", assignedWork: "" },
    { id: 3, name: "Ravi Mehta", department: "Maintenance", assignedWork: "" },
    { id: 4, name: "Sunita Das", department: "Sanitation", assignedWork: "Clean drainage" },
  ];

  return (
    <div style={{ padding: "2rem", color: "#f8f9fa", backgroundColor: "#212529", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>👷‍♂️ Staff Management</h2>
      <p>Monitor staff details and their current assignments.</p>

      <div style={{ overflowX: "auto", marginTop: "1rem" }}>
        <table style={tableStyle}>
          <thead>
            <tr style={theadStyle}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Assigned Work</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member.id} style={trStyle}>
                <td style={tdStyle}>{member.name}</td>
                <td style={tdStyle}>{member.department}</td>
                <td style={tdStyle}>{member.assignedWork || "Nothing assigned"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
//   backgroundColor: "#343a40",
  borderRadius: "8px",
};

const theadStyle = {
  backgroundColor: "#495057",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  color: "#f8f9fa",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "12px",
  color: "#f8f9fa",
  borderTop: "1px solid #6c757d",
};

const trStyle = {
  borderBottom: "1px solid #6c757d",
};

export default Staff;
