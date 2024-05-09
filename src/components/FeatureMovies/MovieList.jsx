import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <>
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-3 place-items-center mt-6">
        {
        [0,1,2,3,4,5].map((v, i)=>(
          <MovieCard key={i}/>
        ))

        }
      </div>
    </>
  );
};

export default MovieList;
