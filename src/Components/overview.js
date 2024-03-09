// OverviewSection.js

import React from 'react';

const OverviewSection = () => {
  return (
    <section className="overview-section bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
      <p className="text-gray-700 mb-6">
        The Hospital Management System is a comprehensive solution designed to streamline administrative processes
        and enhance efficiency within healthcare facilities. Its primary purpose is to address the challenges faced by
        healthcare professionals and administrators in managing various aspects of hospital operations.
      </p>

      <h3 className="text-xl font-semibold mb-2">Key Objectives:</h3>
      <ul className="list-disc ml-6 mb-6">
        <li>Efficient Patient Management: Simplify the process of recording and managing patient information.</li>
        <li>Appointment Scheduling: Enable easy and organized scheduling of patient appointments with healthcare providers.</li>
        <li>Medical Record Management: Facilitate the maintenance and retrieval of electronic medical records.</li>
        <li>Billing and Invoicing: Automate billing processes to streamline financial transactions.</li>
        {/* Add more specific objectives based on your project */}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Significance in Healthcare:</h3>
      <p className="text-gray-700">
        The Hospital Management System plays a crucial role in improving the overall workflow of healthcare institutions.
        By digitizing and automating various tasks, it contributes to reducing errors, enhancing patient care, and
        optimizing resource utilization. This project aligns with the broader goal of leveraging technology to create
        efficient and patient-centric healthcare services.
      </p>
    </section>
  );
};

export default OverviewSection;
