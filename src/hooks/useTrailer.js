import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)

  //fetch the movie trailer and Updating the appstore with trailer video data

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      API_OPTION
    );
    const json = await data.json();
    console.log("json",json);

    const trailerData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useTrailer;
