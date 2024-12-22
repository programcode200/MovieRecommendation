import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  
  return (
    <div className="px-5">
      <h1 className="font-bold text-xl pb-1 pt-2 font-serif text-gray-300">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieImg={movie?.poster_path} title={movie?.title || movie?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
