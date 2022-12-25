import React from 'react';
import './IMDBTopList.css';

const IMDBTopList = () => {
  return (
    <div className="IMDBTopList">
      <div className="IMDBTopList-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <img src="poster_image.jpg" alt="Movie poster" className="w-full h-48 object-cover" />
        <h2 className="text-2xl font-bold mt-4">Movie Title</h2>
        <div className="flex items-center mt-2">
          <span className="text-teal-500 text-sm font-bold mr-2">IMDB Rating:</span>
          <span className="text-gray-700 text-sm">9.0</span>
        </div>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">Movie overview goes here...</p>
        <div className="flex items-center mt-4">
          <span className="text-teal-500 text-sm font-bold mr-2">Genre:</span>
          <span className="text-gray-700 text-sm">Action</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-teal-500 text-sm font-bold mr-2">Runtime:</span>
          <span className="text-gray-700 text-sm">2h 30m</span>
        </div>
      </div>
    </div>
  );
};

export default IMDBTopList;
