const TicketCount = () => {
  return (
    <div className="basis-1/2">
              <h1 className="font-bold font-mono text-2xl">Select Seat Type</h1>{" "}
              <br />
              <div className="flex flex-row justify-around ps-2 border border-gray-200 px-4 p-2 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-3/4">
                <div>
                  <button className="p-3 rounded-md bg-violet-500 text-white cursor-pointer">
                    +
                  </button>
                </div>
                <div className="flex flex-col ">
                  <h1 className="font-bold">0 Tickets</h1>
                  <p className="text-sm">Max 10 Tickets</p>
                </div>
                <div className="p-3 rounded-md bg-violet-500 text-white cursor-pointer">-</div>
              </div>
            </div>
  )
}

export default TicketCount