import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRatedSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedSeries = () => {
  // fetch data from tmdb API and update the store
  const dispatch = useDispatch();
  const TopRatedSeries = useSelector((store) => store.movies.topRatedSeries)


  const getTopRatedSeries= async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);

    dispatch(addTopRatedSeries(json.results));
  };

  useEffect(() => {
    !TopRatedSeries && getTopRatedSeries();
  }, []);
};


export default useTopRatedSeries