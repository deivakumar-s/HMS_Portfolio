// Portfolio.js

import React from 'react';
import NavBar from './navbar';
import AboutSection from './AboutSection';
import ScreenshotsSection from './ScreenshotsSection';
import ContactSection from './ContactSection';


const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <div className="portfolio-container">
        <AboutSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Portfolio;
