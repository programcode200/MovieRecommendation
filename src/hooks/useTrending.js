import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrendingSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrending = () => {
  // fetch data from tmdb API and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);

    dispatch(addTrendingSeries(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useTrending;
