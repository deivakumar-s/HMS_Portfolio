import React from 'react';
import './App.css';
import NavBar from './Components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
