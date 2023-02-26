import Banner from "../components/Banner";
import MovieCard from "../components/MovieCardList";
import { useMovieData } from "../helper/useMovieData";

function HomePage() {
  return (
    <div className="flex flex-col items-start ">
      <Banner MovieData={useMovieData} />
      <div className=" text-3xl m- font-bold text-white font-sans">
        Top Rated
      </div>
      <MovieCard />
    </div>
  );
}

export default HomePage;
