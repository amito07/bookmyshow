import Header from "../../components/Header";
import DateCard from "./DateCard";
import MovieCard from "./MovieCard";
import { running_movies } from "../../utils/function";
import TimeCard from "./TimeCard";
import SeatCard from "./SeatCard";
import TicketCount from "./TicketCount";
import { useState } from "react";
import TicketCard from "./TicketCard";
import { ticketSummary } from "../../utils/data";

const Ticket = () => {
  const [ticketCount, setTicketCount] = useState(0);
  const [summaryTicket, setSummaryTicket] = useState(ticketSummary);
  const [isMovieCardSelected, setIsMovieCardSelected] = useState(false);
  const [isTimeCardSelected, setIsTimeCardSelected] = useState(false);
  const [isSeatCardSelected, setIsSeatCardSelected] = useState(false);

  console.log("summaryTicket", summaryTicket);
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-around mt-3">
        <div className="space-y-10">
          <section>
            <DateCard data={[1, 2, 3]} />
          </section>
          <section>
            <MovieCard
              data={running_movies}
              setSummaryTicket={setSummaryTicket}
              setIsMovieCardSelected={setIsMovieCardSelected}
            />
          </section>
          <section>{isMovieCardSelected ? <TimeCard setIsTimeCardSelected={setIsTimeCardSelected} setSummaryTicket={setSummaryTicket}  /> : <></>}</section>
          <section className="grid grid-cols-12 space-y-5 lg:space-y-0">
            {isTimeCardSelected ? (
              <div className="col-span-12 lg:col-start-1 col-end-5">
                <SeatCard setIsSeatCardSelected={setIsSeatCardSelected} setSummaryTicket={setSummaryTicket} />
              </div>
            ) : (
              <></>
            )}
            {isSeatCardSelected ? (
              <div className="col-span-12 lg:col-start-6 col-end-12">
                <TicketCount
                  ticketCount={ticketCount}
                  setTicketCount={setTicketCount}
                  setSummaryTicket = {setSummaryTicket}
                />
              </div>
            ) : (
              <></>
            )}
          </section>
        </div>
        <div>
          <TicketCard summaryTicket={summaryTicket} />
        </div>
      </div>
    </>
  );
};

export default Ticket;
