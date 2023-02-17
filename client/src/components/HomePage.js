import Banner from "./Banner";
import MovieCard from "./MovieCardList";

function HomePage() {
  return (
    <div>
      <Banner />
      <div className=" absolute top-96 left-64 text-3xl font-bold text-white font-sans ml-2 mt-10">
        Top Rated
      </div>
      {/* <MovieCard /> */}
    </div>
  );
}

export default HomePage;
