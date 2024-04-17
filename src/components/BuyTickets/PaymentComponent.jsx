import React from "react";

const PaymentComponent = ({ payment_description, img_url }) => {
  return (
    <div className="border-2 rounded-md">
      <div className="p-2 flex flex-col items-center space-y-2">
        <img
          src={img_url}
          className="w-52 transition ease-in-out duration-100 hover:-translate-y-1 hover:scale-110 cursor-pointer"
        />
        <h3 className="text-2xl text-white">PURCHASE A TICKET</h3>
        <p className="text-xl text-white">
          {payment_description}
        </p>
        <button
          type="button"
          class="text-white hover:text-white border border-white hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 duration-150"
        >
          Purple
        </button>
      </div>
    </div>
  );
};

export default PaymentComponent;
