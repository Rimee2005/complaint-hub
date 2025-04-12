import React from "react";

const TrackStatus = () => {
  return (
    <div style={{ padding: "2rem", color: "#f8f9fa", backgroundColor: "#212529", minHeight: "100vh" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>📊 Track Complaint Status</h2>
      <p>Keep track of complaint resolution progress in real-time.</p>

      <div style={{ marginTop: "2rem" }}>
        <h4>Status Overview</h4>
        <p>(Status tracking data will appear here after backend is integrated)</p>
        <div style={{ backgroundColor: "#343a40", padding: "1rem", borderRadius: "8px" }}>
          <p>No complaints being tracked currently.</p>
        </div>
      </div>
    </div>
  );
};

export default TrackStatus;
