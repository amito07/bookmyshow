import Header from "../../components/Header";
import DateCard from "./DateCard";
import MovieCard from "./MovieCard";
import { running_movies } from "../../utils/function";
import TimeCard from "./TimeCard";
import SeatCard from "./SeatCard";
import TicketCount from "./TicketCount";
import { ClockIcon, DateIcon, FilmIcon } from "../../utils/icons";

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
          <div className="flex flex-col border-2 space-y-4 p-4">
            <div className="flex flex-row space-x-4">
              <img src="src/assets/poster/p13.png" className="w-24" />
              <span>
                <p className="font-light">3D</p>
                <p className="font-light">Joker 4</p>
                <p className="font-light">Duration: 94min</p>
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex flex-row justify-between">
                <h1 className="font-bold flex">
                  <DateIcon />
                  Show-Date
                </h1>
                <h1>2024-04-22</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="font-bold flex">
                  <FilmIcon /> Hall Name
                </h1>
                <h1>Hall 6</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="font-bold flex">
                  <ClockIcon /> Show Time
                </h1>
                <h1>5:40 PM</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="font-bold flex">
                  {" "}
                  <ClockIcon />
                  Seat Type
                </h1>
                <h1>Premium</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="font-bold flex">
                  {" "}
                  <ClockIcon />
                  Ticket Quantity
                </h1>
                <h1>2</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="font-bold flex">
                  {" "}
                  <ClockIcon />
                  Selected Seat
                </h1>
                <h1>A4, A6</h1>
              </div>
              <div className="flex flex-row justify-between">
                <h1 className="font-bold flex">
                  {" "}
                  <ClockIcon />
                  Total Amount
                </h1>
                <h1>900TK</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
