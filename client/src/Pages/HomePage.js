import Banner from "../components/Banner";
import MovieCard from "../components/MovieCardList";

function HomePage() {
  return (
    <div className="flex flex-col items-start">
      <Banner />
      <div className=" text-3xl m-4 font-bold text-white font-sans">
        Top Rated
      </div>
      <MovieCard />
    </div>
  );
}

export default HomePage;
