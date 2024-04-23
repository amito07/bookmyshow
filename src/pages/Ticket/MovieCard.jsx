const MovieCard = ({ data, setSummaryTicket, setIsMovieCardSelected }) => {

  const SelectedMovie = (e, imageUrl, movieName, duration) =>{
    setSummaryTicket(prevState =>({
      ...prevState,
      movie_url: imageUrl,
      movie_name: movieName,
      movie_duration: duration
    }))
    setIsMovieCardSelected(true)
  }
  return (
    <>
      <h1 className="font-bold font-mono text-2xl">Select Movie (9)</h1> <br />
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-1">
        {data.map((v, i) => (
          <div
            key={i}
            className="w-28 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-1 cursor-pointer flex flex-col items-center rounded-md"
          >
            <img src={v.image} className="w-20" onClick={(e)=> SelectedMovie(e, v.image, v.name, v.duration)} />
            <p className="font-light">{v.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
