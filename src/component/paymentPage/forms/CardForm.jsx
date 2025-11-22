// src/components/payment/forms/CardForm.jsx
import React from "react";

export default function CardForm({
  cardNumber,
  onCardNumberInput,
  cardExpiry,
  onExpiryInput,
  cardCvv,
  setCardCvv,
  cardName,
  setCardName,
  cardType,
  handlePay,
}) {
  return (
    <div id="card-form" className="payment-form active">
      <h3 className="form-title text-[var(--gold)] mb-4">Card Details</h3>

      <div className="mb-3">
        <label className="block mb-1 text-sm">Card Number</label>
        <div className="relative">
          <input
            value={cardNumber}
            onChange={(e) => onCardNumberInput(e.target.value)}
            className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] outline-none"
            placeholder="1234 5678 9012 3456"
            maxLength={23}
          />
          {cardType && (
            <div className="absolute right-3 top-3 h-7">{cardType}</div>
          )}
        </div>
      </div>

      <div className="flex gap-3 mb-3">
        <div className="flex-1">
          <label className="block mb-1 text-sm">Expiry Date</label>
          <input
            value={cardExpiry}
            onChange={(e) => onExpiryInput(e.target.value)}
            className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] outline-none"
            placeholder="MM/YY"
            maxLength={5}
          />
        </div>
        <div className="w-32">
          <label className="block mb-1 text-sm">CVV</label>
          <input
            value={cardCvv}
            onChange={(e) =>
              setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))
            }
            className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] outline-none"
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="block mb-1 text-sm">Card Name</label>
        <input
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] outline-none"
          placeholder="John Doe"
        />
      </div>

      <button
        onClick={handlePay}
        className="w-full py-3 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--light-purple)] text-black font-semibold mt-2 hover:-translate-y-1 transition-all"
      >
        Pay Now
      </button>
    </div>
  );
}
