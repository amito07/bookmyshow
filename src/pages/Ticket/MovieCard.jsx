const MovieCard = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <h1 className="font-bold font-mono text-2xl">Select Movie (9)</h1> <br />
      <div className="grid grid-cols-4 gap-3">
        {data.map((v, i) => (
          <div
            key={i}
            className="w-28 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-1 cursor-pointer flex flex-col items-center rounded-md"
          >
            <img src={v.image} className="w-20" />
            <p className="font-light">Dummy Movie</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
