const TicketCount = ({ticketCount, setTicketCount}) => {

  const IncreaseTicket = () =>{
    console.log("Increasing ticket count")
    if(ticketCount < 10){
      setTicketCount(ticketCount + 1)
    }
  }

  const DecreateTicket = () =>{
    if(ticketCount > 0){
      setTicketCount(ticketCount - 1)
    }
  }
  return (
    <div>
      <h1 className="font-bold font-mono text-2xl">Ticket Quantity</h1> <br />
      <div className="grid grid-cols-6 gap-2 border border-gray-200 px-4 p-2 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] place-items-center">
        <div className="col-span-2">
          <button className="rounded-md bg-violet-500 text-white cursor-pointer p-4 items-center" onClick={()=> IncreaseTicket()}>
            +
          </button>
        </div>
        <div className="col-span-2">
          <h1 className="font-bold">{ticketCount} Tickets</h1>
          <p className="text-sm">Max 10 Tickets</p>
        </div>
        <div className="col-span-2">
          <button className="rounded-md bg-violet-500 text-white cursor-pointer p-4 items-center" onClick={()=>DecreateTicket()}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCount;
