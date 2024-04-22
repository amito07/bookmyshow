const TimeCard = () => {
  return (
    <>
      <h1 className="font-bold font-mono text-2xl">Select Show Time</h1> <br />
      <div className="flex flex-row justify-between px-4 w-1/2 p-5 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h1>Hall 6</h1>
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          5:10PM
        </button>
      </div>
    </>
  );
};

export default TimeCard;
