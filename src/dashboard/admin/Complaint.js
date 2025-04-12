import React from "react";

const Complaint = () => {
  const complaints = [
    { id: 1, title: "Street light not working", assignedTo: "", trackId: "TRK001" },
    { id: 2, title: "Water leakage issue", assignedTo: "", trackId: "TRK002" },
  ];

  return (
    <div style={{ padding: "2rem", color: "#f8f9fa", backgroundColor: "#212529", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>📋 Complaint Management</h2>
      <p>Here, you can view, review, and take necessary actions on user complaints.</p>

      <div style={{ marginTop: "2rem" }}>
        <h4>All Complaints</h4>

        <div style={{ overflowX: "auto", marginTop: "1rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#343a40", borderRadius: "8px" }}>
            <thead>
              <tr style={{ backgroundColor: "#495057" }}>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Assign</th>
                <th style={thStyle}>Track</th>
                <th style={thStyle}>View</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id} style={{ borderBottom: "1px solid #6c757d" }}>
                  <td style={tdStyle}>{complaint.title}</td>
                  <td style={tdStyle}>
                    <select style={dropdownStyle}>
                      <option value="">Select</option>
                      <option value="user1">User 1</option>
                      <option value="user2">User 2</option>
                    </select>
                  </td>
                  <td style={tdStyle}>{complaint.trackId}</td>
                  <td style={tdStyle}>
                    <button style={btnStyle}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {complaints.length === 0 && (
            <p style={{ padding: "1rem", color: "#ced4da" }}>No complaints available currently.</p>
          )}
        </div>
      </div>
    </div>
  );
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
};

const dropdownStyle = {
  padding: "8px",
  borderRadius: "4px",
  backgroundColor: "#212529",
  color: "#f8f9fa",
  border: "1px solid #6c757d",
};

const btnStyle = {
  padding: "6px 12px",
  borderRadius: "4px",
  backgroundColor: "#17a2b8",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default Complaint;
