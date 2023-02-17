import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US&page=1"
  );
  return response;
};

export function useMovieData() {
  const movieQuery = useQuery(["movies"], () => {
    console.log("m yahan hun");
    return fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US&page=1"
    ).then((res) => res.json());
  });

  return movieQuery;
}
