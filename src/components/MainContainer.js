import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return; //it call early return, means nowPlayingMovies contain null or empty then return and don't go forward.
  console.log("maincontainer", movies);

  const mainMovie = movies[2];
  console.log("movie",mainMovie);

  const { id, overview, original_title , name} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title || name} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
