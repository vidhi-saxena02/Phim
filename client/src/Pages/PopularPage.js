import { usePopularData } from "../helper/useMovieData";
import MovieCardItem from "../components/MovieCardItem";

function PopularPage() {
  const popularQuery = usePopularData();
  console.log(popularQuery.data.data);
  return (
    <div className="flex flex-row  items-start flex-wrap ">
      {popularQuery.isLoading ? (
        <p>isLoading</p>
      ) : (
        popularQuery.data.data.results.map((movie) => (
          <MovieCardItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            vote={movie.vote_average}
            overview={movie.overview}
          />
        ))
      )}
    </div>
  );
}

export default PopularPage;
