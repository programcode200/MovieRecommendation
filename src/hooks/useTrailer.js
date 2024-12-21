import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch the movie trailer and Updating the appstore with trailer video data

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);

    const trailerData = json.results.filter(
      (video) => video.type === "Teaser"
    );
    const trailer = trailerData.length ? trailerData[1] : json.results[0];
    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailer;
