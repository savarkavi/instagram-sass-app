import React from "react";
import PaymentCard from "./paymentCard";

const Billing = () => {
  return (
    <div className="mt-16 flex w-full justify-center gap-12">
      <PaymentCard label="FREE" currentPlan="FREE" />
      <PaymentCard label="PRO" currentPlan="FREE" />
    </div>
  );
};

export default Billing;
