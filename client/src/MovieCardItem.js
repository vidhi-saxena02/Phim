function MovieCardItem({ title, image, vote, overview }) {
  return (
    <div>
      <div className="bg-white shadow-lg border-gray-100 max-h-80 w-3/4 h-56 border sm:rounded-3xl p-2 flex space-x-8">
        <div className="h-52 overflow-visible ">
          <img
            className="rounded-3xl shadow-lg"
            src={"https://image.tmdb.org/t/p/original" + image}
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2  space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl">{title}</h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">{vote}</div>
          </div>
        </div>
      </div>
      <p class=" text-gray-400 text-xs overflow-y-hidden">{overview}</p>
    </div>
  );
}

export default MovieCardItem;
