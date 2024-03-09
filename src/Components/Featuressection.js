// FeaturesSection.js

import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section bg-white p-8">
      <h2 className="text-3xl font-semibold mb-6">Key Features</h2>

      <div className="feature">
        <h3 className="text-xl font-semibold mb-2">User Authentication</h3>
        <p className="text-gray-700">
          Secure user authentication to control access for different roles such as admin, doctors, nurses, and receptionists.
        </p>
      </div>

      <div className="feature">
        <h3 className="text-xl font-semibold mb-2">Appointment Scheduling</h3>
        <p className="text-gray-700">
          Streamlined appointment scheduling system for patients to book appointments with healthcare providers.
        </p>
      </div>

      <div className="feature">
        <h3 className="text-xl font-semibold mb-2">Patient Record Management</h3>
        <p className="text-gray-700">
          Comprehensive patient record management, including demographics, medical history, and treatment details.
        </p>
      </div>

      <div className="feature">
        <h3 className="text-xl font-semibold mb-2">Prescription Handling</h3>
        <p className="text-gray-700">
          Efficient prescription management with the ability to generate, store, and retrieve patient prescriptions.
        </p>
      </div>

      <div className="feature">
        <h3 className="text-xl font-semibold mb-2">Billing and Invoicing</h3>
        <p className="text-gray-700">
          Automated billing and invoicing system to manage financial transactions and insurance claims.
        </p>
      </div>

     
    </section>
  );
};

export default FeaturesSection;
