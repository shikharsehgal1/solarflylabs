import React from 'react';

const EnergyUsage = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-md mx-auto bg-gray-100 h-screen text-center px-8">
      <h1 className="text-2xl font-bold text-purple-600 mt-8">Energy Usage</h1>
      <div className="relative w-48 h-48 mt-8">
        <div className="absolute inset-0 border-8 border-purple-400 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          600/900 <span className="text-sm ml-1">kWh</span>
        </div>
      </div>
      <div className="bg-purple-100 rounded-xl shadow-lg mt-8 w-full max-w-lg p-6 text-center">
        <p className="text-lg">
          1500 kWh <span className="text-gray-600 text-sm">Energy Purchased</span>
        </p>
        <p className="text-lg mt-2">
          600 kWh <span className="text-gray-600 text-sm">Energy Used</span>
        </p>
        <p className="text-lg mt-2">
          900 kWh <span className="text-gray-600 text-sm">Energy Available</span>
        </p>
      </div>
    </div>
  );
};

export default EnergyUsage;
