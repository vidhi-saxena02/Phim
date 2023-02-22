import MovieCardItem from "./MovieCardItem";
import { useMovieData } from "../helper/useMovieData";

function MovieCard() {
  const TopmovieQuery = useMovieData();

  return (
    <div className="flex flex-row  items-start flex-wrap ">
      {TopmovieQuery.isLoading ? (
        <p>isLoading</p>
      ) : (
        TopmovieQuery.data.data.results.map((movie) => (
          <MovieCardItem
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            vote={movie.vote_average}
            overview={movie.overview}
            video={movie.video}
          />
        ))
      )}
    </div>
  );
}

export default MovieCard;
