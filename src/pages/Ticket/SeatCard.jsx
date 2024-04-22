const SeatCard = () => {
  return (
    <div className="basis-1/2">
    <h1 className="font-bold font-mono text-2xl">Select Seat Type</h1>{" "}
    <br />
    <div className="flex items-center ps-2 border border-gray-200 px-4 p-2 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-3/4">
      <input
        checked
        id="bordered-radio-2"
        type="radio"
        value=""
        name="bordered-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="bordered-radio-2"
        className="w-full py-4 ms-2 text-sm font-medium text-black dark:text-black"
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