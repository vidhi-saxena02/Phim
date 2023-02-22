import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getVideo = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ae88a9c1382acbcb3f5b50fff7547370&language=en-US`
  );
  return response;
};

function MovieCardItem({ id, title, image, vote, overview }) {
  const videoQuery = useQuery(["video"], () => getVideo(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="group relative">
      <img
        src={"https://image.tmdb.org/t/p/original" + image}
        alt=""
        className="object-fill rounded-lg cursor-pointer ml-10 mb-10 border border-white w-44 hover:scale-105 "
      />
      <div className="invisible group-hover:visible absolute top-0 left-2 right-10 rounded-lg w-60 h-72 bg-black hover: bg-gray-900  transition ease-in duration-500 hover:scale-125">
        <video
          src={videoQuery.data.data.results.key}
          width="750"
          height="500"
          controls
          autoPlay
        ></video>
        <div className="flex justify-between m-2">
          <div className="title text-white text-sm">{title}</div>
          <div className="rounded border bg-yellow-400 text-black h-6 font-bold font-mono">
            {vote}
          </div>
        </div>
        <div className="truncate text-gray-500 m-2">{overview}</div>
      </div>
    </div>
  );
}

export default MovieCardItem;

// {
/* <div className="bg-white shadow-lg border-gray-100  w-72 h-48 border sm:rounded-3xl p-2 flex space-x-8">
        <div className="h-28  ">
          <img
            className="rounded-3xl shadow-lg"
            src={"https://image.tmdb.org/t/p/original" + image}
            alt=""
          />
        </div>
        <div className="flex flex-col w-96  space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl">{title}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">{vote}</div>
          </div>
          <p class=" text-gray-400 text-xs overflow-y-hidden">{overview}</p>
        </div>
      </div> 
      */
// }
