const DateCard = ({ data }) => {
  return (
    <>
      <h1 className="font-bold font-mono text-2xl">Select Date</h1> <br />
      <div className="flex flex-row space-x-4">
        {data.map((v, i) => (
          <div
            className="w-24 p-1 rounded-md cursor-pointer transition ease-in-out delay-150 hover:scale-100 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/40"
            key={i}
          >
            <h1>Mon</h1>
            <span className="flex flex-row items-baseline">
              <h1 className="text-2xl">22</h1>
              <p>Apr</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default DateCard;
