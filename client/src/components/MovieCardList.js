import MovieCardItem from "../MovieCardItem";
import { useMovieData } from "../helper/useMovieData";

function MovieCard() {
  const TopmovieQuery = useMovieData();

  return (
    <div className=" absolute top-2/3 left-64 flex flex-row  ">
      {TopmovieQuery.isLoading ? (
        <p>isLoading</p>
      ) : (
        TopmovieQuery.data.results.map((movie) => (
          <div>
            <MovieCardItem
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              vote={movie.vote_average}
              overview={movie.overview}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default MovieCard;
