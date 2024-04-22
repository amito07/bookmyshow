import Header from "../../components/Header";
import DateCard from "./DateCard";
import MovieCard from "./MovieCard";
import { running_movies } from "../../utils/function";
import TimeCard from "./TimeCard";
import SeatCard from "./SeatCard";
import TicketCount from "./TicketCount";

const Ticket = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-around mt-3">
        <div className="space-y-10">
          <section>
            <DateCard data={[1, 2, 3]} />
          </section>
          <section>
            <MovieCard data={running_movies} />
          </section>
          <section>
            <TimeCard />
          </section>
          <section className="flex flex-row justify-evenly">
            <SeatCard />
            <TicketCount />
          </section>
        </div>
        <div>
          <h1 className="font-bold font-mono text-2xl">Tickets Summary</h1>{" "}
          <br />
          <div className="flex flex-col border-2">
            <div className="flex flex-row">Top</div>
            <div>Bottom</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
