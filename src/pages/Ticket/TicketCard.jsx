import { ClockIcon, DateIcon, FilmIcon } from "../../utils/icons";

const TicketCard = ({summaryTicket}) => {
  const {movie_url, movie_name, movie_duration, show_date, hall_name, show_time, seat_type, ticket_quantity, selected_seat, total_amount} = summaryTicket
  return (
    <>
      <h1 className="font-bold font-mono text-2xl">Tickets Summary</h1> <br />
      <div className="grid grid-cols-4 border-2 space-y-4 p-4 place-content-center">
        <div className="space-x-4">
          <img src={movie_url ? movie_url : "/src/assets/poster/p1.png"} className="w-24 col-span-2" />
        </div>
        <div className="col-span-2 ml-2">
          <span>
            <p className="font-bold font-mono">3D</p>
            <p className="font-bold font-mono">{movie_name ? movie_name : "Not Select"}</p>
            <p className="font-bold font-mono">Duration: {movie_duration ? `${movie_duration} min` : "00 min"}</p>
          </span>
        </div>
        <div className="space-y-2 col-span-4">
          <div className="flex flex-row justify-between">
            <h1 className="font-bold flex">
              <DateIcon />
              Show-Date
            </h1>
            <h1>{show_date ? show_date : "00-00-00"}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="font-bold flex">
              <FilmIcon /> Hall Name
            </h1>
            <h1>{hall_name ? hall_name : '--'}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="font-bold flex">
              <ClockIcon /> Show Time
            </h1>
            <h1>{show_time ? show_time : '--'}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="font-bold flex">
              {" "}
              <ClockIcon />
              Seat Type
            </h1>
            <h1>{seat_type ? seat_type : '--'}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="font-bold flex">
              {" "}
              <ClockIcon />
              Ticket Quantity
            </h1>
            <h1>{ticket_quantity ? ticket_quantity : '--'}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="font-bold flex">
              {" "}
              <ClockIcon />
              Selected Seat
            </h1>
            <h1>{selected_seat ? selected_seat : '--'}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="font-bold flex">
              {" "}
              <ClockIcon />
              Total Amount
            </h1>
            <h1>{total_amount ? `${total_amount} TK` : '0 TK'}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
