// ChallengesSection.js

import React from 'react';

const ChallengesSection = () => {
  return (
    <section className="challenges-section bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-6">Challenges and Solutions</h2>
      
      <div className="challenge">
        <h3 className="text-xl font-semibold mb-2">Challenge: Scalability</h3>
        <p className="text-gray-700">
          Managing scalability as the user base grows was a major challenge. 
        </p>
        <p className="text-gray-700">
          Solution: Implemented load balancing and optimized database queries to enhance performance.
        </p>
      </div>

      <div className="challenge">
        <h3 className="text-xl font-semibold mb-2">Challenge: Real-time Updates</h3>
        <p className="text-gray-700">
          Achieving real-time updates for appointments and patient records posed a challenge.
        </p>
        <p className="text-gray-700">
          Solution: Implemented WebSocket communication for real-time notifications.
        </p>
      </div>

      {/* Add more challenges and solutions as needed */}
    </section>
  );
};

export default ChallengesSection;
