const SeatCard = () => {
  return (
    <div>
    <h1 className="font-bold font-mono text-2xl">Select Seat Type</h1>{" "}
    <br />
    <div className="grid grid-cols-6 gap-2 border border-gray-200 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] place-items-center">
      <input
        checked
        id="bordered-radio-2"
        type="radio"
        value=""
        name="bordered-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 grid-cols-3"
      />
      <label
        htmlFor="bordered-radio-2"
        className="w-full py-4 ms-2 text-sm font-medium text-black dark:text-black grid-cols-3"
      >
        <span>
          <p className="font-bold">Premium</p>
        </span>
      </label>
    </div>
  </div>
  )
}

export default SeatCard