import React from "react";

const Banner = ({ MovieData }) => {
  const bannerQuery = MovieData();
  if (bannerQuery.isLoading) {
    return <p>isLoading</p>;
  }
  const data = bannerQuery.data.data;
  console.log(bannerQuery);
  return (
    <div className="mt-4">
      <div className="bg-black border border-white rounded-lg drop-shadow-xl  px-10 py-1  h-64 flex flex-row justify-between ">
        <div className="flex flex-col">
          <div className="font-extrabold text-4xl text-white m-4">
            {data.results[0].original_title}
          </div>
          <div className="text-sm font-mono text-white ml-4 mb-3 mr-2">
            {data.results[0].overview}
          </div>
          <button className="text-2xl w-24 ml-1 py-1 px-2 border border-red-800 bg-red-800 rounded-full text-white font-sans font-bold ">
            Watch
          </button>
        </div>
        <img
          src={
            "https://image.tmdb.org/t/p/original" +
            data.results[0].backdrop_path
          }
          alt={data.results[0].original_title}
          className="mr-3 ml-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
