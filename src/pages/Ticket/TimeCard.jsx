const TimeCard = () => {
  return (
    <>
      <h1 className="font-bold font-mono text-2xl">Select Show Time</h1> <br />
      <div className="grid grid-cols-4 gap-2 px-2 p-3 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] place-items-center">
        <div className="col-start-1 col-end-2">
          <h1 className="font-bold">Hall 6</h1>
        </div>
        <div className="col-end-5 col-span-2">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          5:10PM
        </button>

        </div>
      </div>
    </>
  );
};

export default TimeCard;
