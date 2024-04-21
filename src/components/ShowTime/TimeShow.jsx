import React from "react";
import { TicketIcon } from "../../utils/icons";

const TimeShow = () => {
  return (
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center">
      <TicketIcon />

      <div class="text-lg font-bold mb-2">Time: 12:30 PM</div>
      <div class="text-center text-gray-500 text-sm">Enjoy the show!</div>
    </div>
  );
};

export default TimeShow;
