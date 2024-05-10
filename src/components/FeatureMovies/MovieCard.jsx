const MovieCard = () => {
  return (
    <div className="col-span-12 md:col-span-3 lg:col-span-2 transition-all ease-in-out delay-300 hover:-translate-y-1 hover:scale-110">
      <img
        src="/src/assets/poster/p1.png"
        className="border-2 rounded-lg w-48 border-gray-600 hover:border-red-600 cursor-pointer"
      />
      <div className="grid grid-cols-2 space-x-16">
      <h6 className="text-white">Movie name</h6>
      <h6 className="text-white"> 5.5</h6>
      </div>
    </div>
  );
};

export default MovieCard;
