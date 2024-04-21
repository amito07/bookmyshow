import React from "react";

const TicketCard = () => {
  return (
    <div class="max-w-md mx-auto my-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="src/assets/poster/p13.png"
          alt="Movie Poster"
          class="w-full h-auto"
        />
        <div class="p-4">
          <div class="text-xl font-bold mb-2">Movie Name</div>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </p>
          <div class="border-t border-b border-gray-300 py-4">
            <div class="grid grid-cols-2 gap-x-4 mb-4">
              <div>
                <div class="text-gray-600 font-semibold">Show Date</div>
                <div class="text-gray-800">April 22, 2024</div>
              </div>
              <div>
                <div class="text-gray-600 font-semibold">Hall Name</div>
                <div class="text-gray-800">Cinema City</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-x-4 mb-4">
              <div>
                <div class="text-gray-600 font-semibold">Show Time</div>
                <div class="text-gray-800">12:30 PM</div>
              </div>
              <div>
                <div class="text-gray-600 font-semibold">Seat Type</div>
                <div class="text-gray-800">Standard</div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-x-4 mb-4">
              <div>
                <div class="text-gray-600 font-semibold">Ticket Quantity</div>
                <div class="text-gray-800">2</div>
              </div>
              <div>
                <div class="text-gray-600 font-semibold">Selected Seats</div>
                <div class="text-gray-800">A12, A13</div>
              </div>
            </div>
            <div class="text-xl font-bold mb-2">Total Amount</div>
            <div class="text-2xl text-gray-800">$20.00</div>
          </div>
          <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Purchase Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
