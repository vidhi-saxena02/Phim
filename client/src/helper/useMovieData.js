import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US&page=1"
  );
  return response;
};

export function useMovieData() {
  const movieQuery = useQuery(["movies"], getMovies);
  return movieQuery;
}

const getPopular = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US&page=1"
  );
  console.log(response);
  return response;
};

export function usePopularData() {
  const popularQuery = useQuery(["popular"], getPopular);
  // console.log(popularQuery);
  return popularQuery;
}
