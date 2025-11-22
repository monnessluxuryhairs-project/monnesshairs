import React from "react";

function formatNumber(num) {
  if (typeof num !== "number") num = Number(num) || 0;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toNumber(value) {
  if (typeof value === "number") return value;

  // remove currency symbols and commas
  const cleaned = String(value).replace(/[₦$,]/g, "").trim();

  const num = Number(cleaned);
  return isNaN(num) ? 0 : num;
}

export default function OrderSummary({ order }) {
  const priceNum = toNumber(order.price);

  return (
    <div className="w-full max-w-md bg-[rgba(255,255,255,0.04)] backdrop-blur rounded-xl p-6 border border-[rgba(255,255,255,0.06)] shadow-md animate-fadeInUp">
      <h3 className="text-xl font-semibold text-[var(--gold)] mb-3">
        Order Summary
      </h3>

      <div className="flex justify-between mb-2">
        <span className="text-sm">Product:</span>
        <span className="font-medium">{order.title}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span className="text-sm">Price:</span>
        <span className="font-semibold text-[var(--milk)]">
          {order.currency === "NGN"
            ? "₦" + formatNumber(priceNum)
            : `${order.currency} ${formatNumber(priceNum.toFixed(2))}`}
        </span>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.04)] pt-3 mt-3 flex justify-between items-center">
        <span className="font-semibold">Total:</span>
        <span className="text-lg font-bold">
          {order.currency === "NGN"
            ? "₦" + formatNumber(priceNum)
            : `${order.currency} ${formatNumber(priceNum.toFixed(2))}`}
        </span>
      </div>
    </div>
  );
}
