import React from "react";
import { payment_info } from "../../utils/function";
import PaymentComponent from "./PaymentComponent";

const BuyTickets = () => {
  return (
    <div
      className="p-4 rounded-lg bg-violet-50 dark:bg-violet-800 flex flex-col items-center justify-around md:flex-row space-y-2"
      id="buy_tickets"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      {payment_info.map((x, i) => (
        <PaymentComponent
          payment_description={x.payment_description}
          img_url={x.img_url}
          key={i}
        />
      ))}
    </div>
  );
};

export default BuyTickets;
