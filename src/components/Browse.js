import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import useTrending from "../hooks/useTrending";
import GptSearch from "./GptSearch";

const Browse = () => {
  //call custom hook from useuseNowPlayingMovies
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedSeries();
  useTrending()

  return (
    <div>
      <Header />
      <GptSearch/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
