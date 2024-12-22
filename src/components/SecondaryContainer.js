import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  

  return (
    movies.nowPlayingMovies && (
      <div className="-mt-64 bg-black">
        <div className="relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedSeries} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingSeries} />
       
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
