import React from 'react';

const BasicComponent = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Hello, React!</h1>
      <p className="text-gray-600 mt-2">This is a basic React component styled with Tailwind CSS.</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
        onClick={() => alert('Button clicked!')}
      >
        Click Me
      </button>
    </div>
  );
};

export default BasicComponent;
