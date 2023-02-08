// import axios from "axios";
import { useEffect } from "react";

function HomePage() {
  //   const getTop = async () => {
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US&page=1"
  //     );
  //     console.log(response.data.results[1].original_title);
  //   };

  useEffect(() => {
    // getTop();
  }, []);

  return <div>Home</div>;
}

export default HomePage;
