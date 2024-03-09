import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-emerald-600 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">HMS</div>
      <div className="flex space-x-8">
        <a href="#" className="text-white hover:text-gray-300">Home</a>
        <a href="#" className="text-white hover:text-gray-300">Featured</a>
        <a href="#" className="text-white hover:text-gray-300">Projects</a>
        <a href="#" className="text-white hover:text-gray-300">About Me</a>
      </div>
    </div>
  );
};

export default NavBar;
