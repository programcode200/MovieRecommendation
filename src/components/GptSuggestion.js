import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {
  const { moviename, movieResult } = useSelector((store) => store.gpt);

  if(!moviename) return

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {moviename.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResult[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestion;
