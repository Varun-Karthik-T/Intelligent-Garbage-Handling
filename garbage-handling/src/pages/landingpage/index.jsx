// LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaChartBar, FaMapMarkerAlt } from 'react-icons/fa';
import './style.css';
import Navbar from '@/components/ui/navbar';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <nav style={navbarStyle}>
        <ul style={navbarListStyle}>
          <li>
            <Link to="/" style={navbarLinkStyle}>
              <FaHome style={navbarIconStyle} /> Home
            </Link>
          </li>

          <li>
            <Link to="/dashboard" style={navbarLinkStyle}>
              <FaChartBar style={navbarIconStyle} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" style={navbarLinkStyle}>
              <FaInfoCircle style={navbarIconStyle} /> About
            </Link>
          </li>

        </ul>
      </nav>
      <div className="content-container">
        <div style={centerContainerStyle} className="fade-in">
          <h1 style={bigTextStyle}>Intelligent Garbage Handling</h1>
          <h1 style={smallTextStyle}>Paving A Way For A Greener Future</h1>
          <p>
            Welcome to our innovative solution for efficient garbage handling.
          </p>
          <p>
            We are dedicated to making a positive impact on the environment.
          </p>
          <p>
            Explore our features and contribute to a cleaner, greener world.
          </p>
          <Link to="/signup" className="cta-button">
            Get Started
          </Link>
        </div>
        <div style={imageContainerStyle} className="zoom-in">
          <img
            src="https://img.freepik.com/free-photo/funny-image-with-bin_23-2151179439.jpg?t=st=1708706162~exp=1708709762~hmac=29924aeeeb99f894102fa267b58f425bcd5c23d18b64142a3eed508192409cc1&w=360"
            alt="Intelligent Garbage Handling Image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

const navbarStyle = {
  backgroundColor: 'black',
  padding: '10px',
  color: 'white',
  zIndex: '1',
};

const navbarListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
};

const navbarLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.3s ease',
};

const navbarIconStyle = {
  marginRight: '5px',
};

const centerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const imageContainerStyle = {
  textAlign: 'right',
};

const bigTextStyle = {
  fontSize: '5em',
  margin: '0',
  fontFamily: 'Gamilia',
  fontWeight: 'bold',
};

const smallTextStyle = {
  fontSize: '2em',
  margin: '0 0 10px', // Added space only at the bottom
  color: '#555',
  fontWeight: '600',
};

const pStyle = {
  fontSize: '1.2em',
  marginBottom: '10px',
  lineHeight: '1.6', // Adjust line height for better readability
};

export default LandingPage;
