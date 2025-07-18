import React from 'react';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Compresso</h1>
      <p className="mb-6 text-gray-600">Compress your images efficiently and effortlessly.</p>
      <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md">Get Started</a>
    </div>
  );
}