import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [admin, setAdmin] = useState({
    name: "Ravi Sharma",
    email: "admin@complainthub.com",
    contact: "9876543210",
    role: "Super Admin",
  });

  const [formData, setFormData] = useState({ ...admin });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({ ...admin });
    setIsEditing(false);
  };

  const handleSave = () => {
    setAdmin({ ...formData });
    setIsEditing(false);
    // TODO: Add backend update logic
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: "#212529", minHeight: "100vh", padding: "2rem", color: "#f8f9fa" }}>
      <div style={{
        backgroundColor: "#343a40",
        borderRadius: "12px",
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      }}>
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>👤 Profile</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />
          ) : (
            <p>{admin.name}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <p>{admin.email}</p>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Contact:</label>
          {isEditing ? (
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              style={inputStyle}
            />
          ) : (
            <p>{admin.contact}</p>
          )}
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label>Role:</label>
          <p>{admin.role}</p>
        </div>

        {isEditing ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={handleSave} style={buttonStyle("#28a745")}>Save</button>
            <button onClick={handleCancel} style={buttonStyle("#6c757d")}>Cancel</button>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <button onClick={handleEdit} style={buttonStyle("#007bff")}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  backgroundColor: "#495057",
  color: "#f8f9fa",
};

const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  border: "none",
  padding: "10px 20px",
  color: "#fff",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "0 5px"
});

export default Profile;

