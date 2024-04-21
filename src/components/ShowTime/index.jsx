import React from "react";
import { StarIcon, TicketIcon, TimeIcon } from "../../utils/icons";
import ButtonComponent from "../../utils/Button";
import TimeShow from "./TimeShow";

const ShowTimeComponent = () => {
  return (
    <div class="flex flex-row flex-wrap">
      <div className="basis-2/4 lg:basis-1/4 flex justify-center items-center">
        <img src="src/assets/poster/p13.png" className="w-60 h-4/5 p-1" />
      </div>
      <div class="basis-2/4 lg:basis-1/4">
        <div className="p-1">
          <p className="font-bold">Godzilla x Kong: The New Empire (3D) </p>
          <br />
          <span className="flex flex-row ">
            <StarIcon /> 6.6
          </span>
          <br />
          <span className="flex flex-row ">
            <TimeIcon /> 1h 55m
          </span>{" "}
          <br />
          <span className="flex flex-row ">
            <p className="font-semibold">Categiry</p>: 3D
          </span>{" "}
          <br />
          <span className="flex flex-row ">
            <p className="font-semibold">Actor</p>: Rebecca Hall,Brian Tyree
            Henry,Dan Stevens
          </span>{" "}
          <br />
          <span className="flex flex-row ">
            <p className="font-semibold">Genre</p>: Action,Adventure,Sci-Fi
          </span>{" "}
          <br />
          <span className="flex flex-row ">
            <p className="font-semibold">Release</p>: 29-03-2024
          </span>{" "}
          <br />
          <span className="flex flex-row ">
            <p className="font-semibold">Language</p>: English
          </span>{" "}
          <br />
        </div>
        <div className="flex flex-row space-x-4">
          <ButtonComponent Name="Details" />
          <ButtonComponent Name="Watch Tailer" />
        </div>
      </div>
      <div class="basis-full lg:basic-full flex flex-row justify-evenly mt-5">
        {[1, 2, 3].map((item, index) => (
          <TimeShow key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShowTimeComponent;
