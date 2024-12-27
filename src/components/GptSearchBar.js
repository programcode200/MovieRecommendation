import React, { useRef } from "react";
import lang from "../utils/languageOptions";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const lanuagekey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie from TMDB
  const searchTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=+" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );

    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchCLick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      " only give me names of 5 movies, comma seperated. example result is: hera pheri, coolie, don, hungama, golmaal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResult?.choices[0]?.message?.content);

    if (!gptResults.choices) {
      alert("Movies not found");
    }

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const arrayOfPromise = gptMovies.map((movie) => searchTMDB(movie)); //it will return promises of Array

    const resultTMDB = await Promise.all(arrayOfPromise);
    console.log(resultTMDB);

    dispatch(addGptMovieResult({moviename: gptMovies, movieResult: resultTMDB }));
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="px-2 py-2 m-2 col-span-9 rounded-md"
          placeholder={lang[lanuagekey].placeholder}
          type="text"
        />
        <button
          className="text-white font-semibold col-span-3 m-2 rounded-md py-2 px-6 bg-red-600 hover:bg-red-700"
          onClick={handleGPTSearchCLick}
        >
          {lang[lanuagekey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
