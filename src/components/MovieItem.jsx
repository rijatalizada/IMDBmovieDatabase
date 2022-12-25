import React from 'react';

const MovieItem = ({Poster_Link, Series_Title, IMDB_Rating, Overview, Genre, Runtime}) => {
  return (
    <div className="IMDBTopList cursor-pointer">
      <div className="IMDBTopList-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <img src={Poster_Link} alt="Movie poster" className=" " />
        <h2 className="text-2xl font-bold mt-4 text-center">{Series_Title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-teal-500 text-sm font-bold mr-1">IMDB Rating:</span>
          <span className="text-gray-700 text-sm">{IMDB_Rating}</span>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-teal-500 text-sm font-bold mr-1">Genre:</span>
          <span className="text-gray-700 text-sm">{Genre}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-teal-500 text-sm font-bold mr-1">Runtime:</span>
          <span className="text-gray-700 text-sm">{Runtime}</span>
        </div>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">{Overview.slice(0,50)}... <span className='text-[red] text-sm'>Read More</span></p>
      </div>
    </div>
  );
};

export default MovieItem;
