import axios from "axios";
import { useState, useEffect } from "react";

function Banner() {
  const [bannerName, setBannerName] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [bannerOverview, setBannerOverview] = useState("");
  const getTop = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US&page=1"
    );
    console.log(response.data);
    setBannerImage(response.data.results[0].backdrop_path);
    setBannerName(response.data.results[0].original_title);
    setBannerOverview(response.data.results[0].overview);
  };

  useEffect(() => {
    getTop();
  }, []);

  return (
    <div className="absolute top-36 left-64 mr-5 ">
      <div className="bg-black border border-black rounded-lg drop-shadow-xl  px-10 py-1  h-64 flex flex-row justify-between ">
        <div className="flex flex-col">
          <div className="font-extrabold text-4xl text-white m-4">
            {bannerName}
          </div>
          <div className="text-sm font-mono text-white ml-4 mb-3 mr-2">
            {bannerOverview}
          </div>
          <button className="text-2xl w-24 ml-1 py-1 px-2 border border-red-800 bg-red-800 rounded-full text-white font-sans font-bold ">
            Watch
          </button>
        </div>
        <img
          src={"https://image.tmdb.org/t/p/original" + bannerImage}
          alt={bannerName}
          className="mr-3 ml-2 rounded-md"
        />
      </div>
    </div>
  );
}

export default Banner;
