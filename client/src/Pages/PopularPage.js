import { usePopularData } from "../helper/useMovieData";
import PopularMovieList from "../components/PopularMovieList";
import Banner from "../components/Banner";

function PopularPage() {
  const popularQuery = usePopularData();
  console.log(popularQuery);
  return (
    <div className="flex flex-col items-start">
      <Banner MovieData={usePopularData} />
      <div className=" text-3xl m-4 font-bold text-white font-sans">
        Popular
      </div>
      <PopularMovieList />
    </div>
  );
}

export default PopularPage;
