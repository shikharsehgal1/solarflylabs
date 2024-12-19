import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EnergyUsage from 'EnergyUsage';
import EnergyPrice from 'EnergyPrice';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <Routes>
          <Route path="/" element={<EnergyUsage />} />
          <Route path="/price" element={<EnergyPrice />} />
        </Routes>
        <footer className="fixed bottom-0 w-full bg-gray-200 py-4 flex justify-around">
          <Link to="/" className="text-purple-600 text-lg">Home</Link>
          <Link to="/price" className="text-purple-600 text-lg">Trade</Link>
          <button className="text-purple-600 text-lg">Profile</button>
        </footer>
      </div>
    </Router>
  );
}

export default App;
