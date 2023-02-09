import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import MovieCardItem from "../MovieCardItem";

function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const getTop = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US&page=1"
    );
    console.log(response);
    setMovies(response.data.results);
  };

  useEffect(() => {
    getTop();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  const renderedMovies = currentPosts.map((movie) => {
    console.log(movie.id);
    return (
      <div className="flex flex-row">
        <MovieCardItem
          key={movie.id}
          title={movie.title}
          image={movie.poster_path}
          vote={movie.vote_average}
          overview={movie.overview}
        />
      </div>
    );
  });
  return (
    <div className=" absolute top-2/3 left-64 flex flex-row  ">
      {renderedMovies}
      <Pagination postperPage={postPerPage} totalPages={movies.length} />
    </div>
  );
}

export default MovieCard;
