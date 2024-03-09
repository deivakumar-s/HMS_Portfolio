// ScreenshotsSection.js

import React from 'react';

const ScreenshotsSection = () => {
  return (
    <section className="screenshots-section bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-6">Screenshots and Demos</h2>

      <div className="screenshot">
        <img src="/path/to/screenshot1.png" alt="Screenshot 1" className="rounded-lg mb-4" />
      </div>

      <div className="screenshot">
        <img src="/path/to/screenshot2.png" alt="Screenshot 2" className="rounded-lg mb-4" />
      </div>

      {/* Add more screenshots or video demos as needed */}
    </section>
  );
};

export default ScreenshotsSection;
