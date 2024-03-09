// TechStackSection.js

import React from 'react';

const TechStackSection = () => {
  return (
    <section className="tech-stack-section bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-6">Technology Stack</h2>

      <div className="technology">
        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
        <p className="text-gray-700">React.js - A JavaScript library for building user interfaces.</p>
        <p className="text-gray-700">Tailwind CSS - A utility-first CSS framework for rapid UI development.</p>
      </div>

      <div className="technology">
        <h3 className="text-xl font-semibold mb-2">Backend</h3>
        <p className="text-gray-700">Node.js - A JavaScript runtime for server-side development.</p>
        {/* Add more backend technologies as needed */}
      </div>

      <div className="technology">
        <h3 className="text-xl font-semibold mb-2">Database</h3>
        <p className="text-gray-700">MySQL - An open-source relational database management system.</p>
        {/* Add more database technologies as needed */}
      </div>

      {/* Add more sections for additional technologies or tools used */}
    </section>
  );
};

export default TechStackSection;
