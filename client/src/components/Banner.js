import { useMovieData } from "../helper/useMovieData";

function Banner() {
  const ok = useMovieData();
  console.log(ok);
  const data = ok.data;

  return (
    <div className="absolute top-36 left-64 mr-5 ">
      <div className="bg-black border border-black rounded-lg drop-shadow-xl  px-10 py-1  h-64 flex flex-row justify-between ">
        <div className="flex flex-col">
          <div className="font-extrabold text-4xl text-white m-4">
            {data.data.results[0].original_title}
          </div>
          <div className="text-sm font-mono text-white ml-4 mb-3 mr-2">
            {data.data.results[0].overview}
          </div>
          <button className="text-2xl w-24 ml-1 py-1 px-2 border border-red-800 bg-red-800 rounded-full text-white font-sans font-bold ">
            Watch
          </button>
        </div>
        <img
          src={
            "https://image.tmdb.org/t/p/original" +
            data.data.results[0].backdrop_path
          }
          alt={data.data.results[0].original_title}
          className="mr-3 ml-2 rounded-md"
        />
      </div>
    </div>
  );
}

export default Banner;
