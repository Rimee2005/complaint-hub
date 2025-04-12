import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundColor: "#343a40",
    color: "#f8f9fa",
    padding: "1.8rem",
    borderRadius: "12px",
    textAlign: "center",
    width: "220px",
    margin: "1rem",
    cursor: "pointer",
    boxShadow: "0 6px 12px rgba(0,0,0,0.25)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHover = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  };

  const containerStyle = {
    backgroundColor: "#212529",
    minHeight: "100vh",
    color: "#f8f9fa",
    padding: "2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1.5rem",
    marginTop: "2.5rem",
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [hoverIndex, setHoverIndex] = React.useState(null);

  const cards = [
    { title: "Complaint Management", icon: "🗂️", path: "/admin/complaint" },
    { title: "Assign Staff", icon: "🧑‍🔧", path: "/admin/staff" },
  ];

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "2rem" }}>🚀 Admin Control Panel</h2>
        <p style={{ fontSize: "1.1rem", marginTop: "0.5rem", color: "#ced4da" }}>
          Welcome, Admin! Monitor and manage your system efficiently.
        </p>
      </div>

      <div style={gridStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(hoverIndex === index ? cardHover : {}),
            }}
            onClick={() => handleNavigate(card.path)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div style={{ fontSize: "2.2rem", marginBottom: "0.7rem" }}>{card.icon}</div>
            <div style={{ fontWeight: "600", fontSize: "1.1rem" }}>{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;