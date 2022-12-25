import React from "react";
import useFetch from "../hooks/useFetch";
import MovieItem from "../components/MovieItem";

const url = "http://localhost:3001/movies";

const Movies = () => {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>An Error Occured, please come back later :(</div>
  }

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-4 items-center gap-8 gap-y-6">
        {data.slice(0, 20).map((movie) => {
          return <MovieItem key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
