// src/components/payment/forms/TransferForm.jsx
import React from "react";

export default function TransferForm({ order, onUploadReceipt }) {
  function formatNumber(num) {
    if (typeof num !== "number") num = Number(num) || 0;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div id="transfer-form" className="payment-form active">
      <h3 className="form-title text-[var(--gold)] mb-4">Bank Transfer</h3>

      <div className="bank-details mb-4 p-4 rounded-md bg-[rgba(0,0,0,0.25)] border-l-4 border-[var(--gold)]">
        <div className="bank-name font-semibold text-[var(--gold)] mb-2">
          MONNESS LUXURY HAIRS
        </div>
        <div className="account-details text-sm mb-2">
          <div>
            <strong>Bank:</strong> Zenith Bank
          </div>
          <div>
            <strong>Account Number:</strong> 1234567890
          </div>
          <div>
            <strong>Account Name:</strong> Monness Luxury Hairs
          </div>
          <div>
            <strong>Amount:</strong>{" "}
            <span className="font-semibold">₦{formatNumber(order.price)}</span>
          </div>
        </div>
        <p className="text-sm opacity-80">
          Transfer the exact amount to the account above.
        </p>
      </div>

      <div className="upload-receipt">
        <p className="mb-2">After payment, upload your receipt:</p>
        <button
          onClick={onUploadReceipt}
          className="upload-btn py-2 px-4 rounded-md bg-[var(--gold)] text-black font-semibold"
        >
          Upload Receipt via WhatsApp
        </button>
      </div>
    </div>
  );
}
