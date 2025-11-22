
import React from "react";
import PaymentMethodCard from "./PaymentMethodCard";

export default function PaymentMethods({ method, setMethod, orderCurrency }) {
  return (
    <div className="payment-methods flex flex-wrap justify-center gap-6 mt-2 w-full max-w-[800px]">
      <PaymentMethodCard
        icon="💳"
        name="Card Payment"
        desc="Visa, Mastercard, Verve"
        active={method === "card"}
        disabled={false}
        onClick={() => setMethod("card")}
      />
      <PaymentMethodCard
        icon="🏦"
        name="Bank Transfer"
        desc="Direct bank transfer (NGN only)"
        active={method === "transfer"}
        disabled={orderCurrency !== "NGN"}
        onClick={() => setMethod("transfer")}
      />
      <PaymentMethodCard
        icon="🔢"
        name="DVA Transfer"
        desc="Paystack virtual account (NGN only)"
        active={method === "dva"}
        disabled={orderCurrency !== "NGN"}
        onClick={() => setMethod("dva")}
      />
    </div>
  );
}
