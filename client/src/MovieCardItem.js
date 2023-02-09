function MovieCardItem({ title, image, vote, overview }) {
  return (
    <div class="sm:max-w-xl sm:mx-auto">
      <div class="bg-white shadow-lg border-gray-100 max-h-80 w-3/4 h-56 border sm:rounded-3xl p-2 flex space-x-8">
        <div class="h-48 overflow-visible ">
          <img
            class="rounded-3xl shadow-lg"
            src={"https://image.tmdb.org/t/p/original" + image}
            alt=""
          />
        </div>
        <div class="flex flex-col w-1/2  space-y-4">
          <div class="flex justify-between items-start">
            <h2 class="text-xl">{title}</h2>
            <div class="bg-yellow-400 font-bold rounded-xl p-2">{vote}</div>
          </div>

          <p class=" text-gray-400 max-h-40 overflow-y-hidden">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCardItem;
