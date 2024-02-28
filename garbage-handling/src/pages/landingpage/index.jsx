// LandingPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaChartBar, FaMapMarkerAlt } from 'react-icons/fa';
import './style.css'; // Assuming you have a CSS file for additional styles
import Navbar from '@/components/navbar'; // Check if this import is necessary

import bg from '../../assets/bg1.jpg';
import { Button } from '@/components/ui/button';

const overlayStyle = `fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start text-white p-10`;

const headingStyle = `text-6xl font-extrabold text-shadow mb-8`;

const subHeadingStyle = `text-4xl font-bold text-shadow mb-10`;

const paragraphStyle = `text-lg mb-10`;

const ctaButtonStyle = `text-2xl font-bold px-10 py-5 border-2 text-green-500 border-green-500 bg-transparent rounded-full transition duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:border-transparent`;

const hoverEffectStyle = `text-green-500 transition duration-1100 ease-in-out transform hover:scale-10`;

const LandingPage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set animation complete after a delay (adjust the duration based on your preference)
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 200);

    return () => clearTimeout(animationTimeout);
  }, []);

  const handleButtonClick = () => {
    // Navigate to /dashboard on button click
    navigate('/dashboard');
  };

  return (
    <div className="landing-page-container">
      <div className="content-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        ></div>
        <div className={`${overlayStyle} ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className={`${headingStyle} ml-6`}>Intelligent Garbage Handling</h1>
          <h2 className={`${subHeadingStyle} ml-6`}>Paving A Way For A <span className={hoverEffectStyle}>Greener</span> Future</h2>
          <p className={`${paragraphStyle} ml-6`}>
            Welcome to our innovative solution for efficient garbage handling.
          </p>
          <p className={`${paragraphStyle} ml-6`}>
            Explore our features and contribute to a cleaner, greener world.
          </p>
          <Button onClick={handleButtonClick} className={`ml-6 ${ctaButtonStyle}`}>Dashboard</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
