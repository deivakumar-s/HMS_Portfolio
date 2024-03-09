// ArchitectureSection.js

import React from 'react';

const ArchitectureSection = () => {
  return (
    <section className="architecture-section bg-white p-8">
      <h2 className="text-3xl font-semibold mb-6">Architecture and Design</h2>

      <p className="text-gray-700">
        The Hospital Management System follows a modular architecture with separate components for frontend and backend.
      </p>

      <p className="text-gray-700">
        <strong>Frontend:</strong> React.js for a dynamic and responsive user interface. Tailwind CSS for styling.
      </p>

      <p className="text-gray-700">
        <strong>Backend:</strong> Node.js server with Express for handling API requests and MySQL database for data storage.
      </p>

      <p className="text-gray-700">
        <strong>Database Schema:</strong> Designed a normalized schema with tables for patients, appointments, doctors, etc.
      </p>

      <p className="text-gray-700">
        Implemented RESTful APIs for seamless communication between the frontend and backend components.
      </p>
    </section>
  );
};

export default ArchitectureSection;
