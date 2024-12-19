import React from 'react';
import { Line } from 'react-chartjs-2';

const EnergyPrice = () => {
  const data = {
    labels: ['12h', '1d', '1w', '1m'],
    datasets: [
      {
        label: 'Energy Price',
        data: [0.15, 0.16, 0.18, 0.17],
        borderColor: '#7C3AED',
        backgroundColor: '#E9D5FF',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center max-w-screen-md mx-auto bg-gray-100 h-screen text-center px-8">
      <h1 className="text-2xl font-bold text-purple-600 mt-8">Energy Price (kWh)</h1>
      <p className="text-xl font-bold mt-4">$0.17675</p>
      <p className="text-sm text-red-500">-3.456%</p>
      <div className="bg-purple-100 mt-8 w-full max-w-lg h-64 p-6 rounded-xl shadow-lg">
        <Line data={data} />
      </div>
      <div className="flex justify-around w-full max-w-lg mt-8">
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md">Buy</button>
        <button className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md">Sell</button>
      </div>
    </div>
  );
};

export default EnergyPrice;
