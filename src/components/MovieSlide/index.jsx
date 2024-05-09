import MovieCard from "../FeatureMovies/MovieCard"

const MovieSlide = ({title}) => {
  return (
    <div className=" mt-10">
    <h1 className="text-white text-4xl font-bold uppercase">
      {title}
    </h1>
    <div className="border-4 w-16 border-red-600"></div>
    <div className="grid grid-cols-6 lg:grid-cols-12 gap-3 place-items-center mt-6">
      {[0, 1, 2, 3].map((v, i) => (
        <MovieCard key={i} />
      ))}
    </div>
  </div>
  )
}

export default MovieSlide