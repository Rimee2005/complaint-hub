import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import necessary components from react-chartjs-2 and chart.js
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the chart components to use in the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  const heroStyle = {
    backgroundColor: '#343a40', // dark background
    padding: '80px 20px',
    textAlign: 'center',
    color: '#f8f9fa', // light text for contrast
  };

  const featureCardStyle = {
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    padding: '20px',
    height: '100%',
    backgroundColor: '#495057', // dark background for cards
    color: '#f8f9fa', // light text for cards
  };

  const sectionStyle = {
    backgroundColor: '#212529', // dark background
    color: '#f8f9fa', // light text for contrast
    padding: '40px 20px',
  };

  // Chart Data for "Complaint Resolution Trend"
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months (x-axis)
    datasets: [
      {
        label: 'Resolved Complaints',
        data: [10, 15, 12, 18, 25, 30], // Number of complaints resolved
        borderColor: '#36A2EB', // Line color for resolved complaints
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Line background color for resolved
        fill: true, // fill under the line
        tension: 0.4, // Smooth line
      },
      {
        label: 'Unresolved Complaints',
        data: [5, 8, 7, 6, 4, 3], // Number of complaints unresolved
        borderColor: '#FF5733', // Line color for unresolved complaints
        backgroundColor: 'rgba(255, 87, 51, 0.2)', // Line background color for unresolved
        fill: true, // fill under the line
        tension: 0.4, // Smooth line
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#212529', color: '#f8f9fa' }}> {/* Dark background for the whole page */}
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Welcome to Complaint Hub</h1>
        <p style={{ fontSize: '20px', color: '#ddd' }}>
          Seamlessly file, track, and resolve your complaints anytime, anywhere.
        </p>
        <a href="/login" className="btn btn-light mt-3 px-4 py-2">Get Started</a>
      </section>

      {/* Features Section */}
      <section className="container mt-5 mb-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div style={featureCardStyle}>
              <h4>📄 Easy Filing</h4>
              <p>Just fill a form — and your complaint is in the system!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={featureCardStyle}>
              <h4>🕒 Real-time Tracking</h4>
              <p>Track the status of your complaint in real-time.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={featureCardStyle}>
              <h4>✅ Quick Resolution</h4>
              <p>Admins can respond and resolve complaints instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complaint Resolution Trend Graph Section */}
      <section className="container mt-5 mb-5">
        <h3 className="text-center mb-4">Complaint Resolution Trend</h3>
        <div className="row">
          <div className="col-md-12">
            <Line data={chartData} options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                title: {
                  display: true,
                  text: 'Monthly Complaint Resolution Trend'
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Month'
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: 'Number of Complaints'
                  }
                }
              }
            }} height={400} />
          </div>
        </div>
      </section>

      {/* Contact / Help Section */}
      {/* <section style={sectionStyle}>
        <h5>Need Help?</h5>
        <p>Contact us at <a href="mailto:support@complainthub.com" className="text-warning">support@complainthub.com</a></p>
      </section> */}

      {/* Footer */}
      <footer className="bg-dark text-center py-3">
        <small>© 2025 Complaint Hub. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default Home;
