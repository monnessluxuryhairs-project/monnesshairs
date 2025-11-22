// src/components/payment/CustomerInfo.jsx
import React from "react";

export default function CustomerInfo({
  customerEmail,
  setCustomerEmail,
  customerPhone,
  setCustomerPhone,
}) {
  return (
    <div className="customer-info mb-4 p-4 rounded-md bg-[rgba(0,0,0,0.25)] border-l-4 border-[var(--gold)]">
      <h3 className="form-title text-[var(--gold)] mb-2">Your Information</h3>
      <div className="mb-3">
        <label className="block mb-1 text-sm">Email Address</label>
        <input
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] outline-none"
          placeholder="your@email.com"
          type="email"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Phone Number</label>
        <input
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--glass-border)] outline-none"
          placeholder="+234 812 345 6789"
          type="tel"
        />
      </div>
    </div>
  );
}
