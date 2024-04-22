const MovieCard = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <h1 className="font-bold font-mono text-2xl">Select Movie (9)</h1> <br />
      <div className="flex flex-wrap space-x-4 space-y-2">
        {data.map((v, i) => (
          <div
            key={i}
            className="basis-2/12 w-32 shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer p-1 flex flex-col items-center"
          >
            <img src={v.image} className="w-32" />
            <p className="font-light">Dummy Movie</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
