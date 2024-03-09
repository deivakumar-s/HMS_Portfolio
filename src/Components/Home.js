import React from 'react';
import LottieAnimation from './animate';

const Home = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center h-screen overflow-y-auto bg-gradient-to-r from-teal-400 to-emerald-600">
    {/* Left side with animation */}
    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
      <LottieAnimation />
    </div>

    {/* Right side with project information */}
    <div className="w-full sm:w-1/2 text-white p-4 sm:p-10">
      <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Welcome!</h2>
      <p className="text-base sm:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="mt-2 sm:mt-4">
        Click <a href="#project-details" className="text-blue-200">here</a> to learn more about our project.
      </p>
    </div>
  </div>
);

export default Home;
