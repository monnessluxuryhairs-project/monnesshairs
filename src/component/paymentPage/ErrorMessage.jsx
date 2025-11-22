// src/components/payment/ErrorMessage.jsx
import React from "react";

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md border-l-4 border-red-400 mb-4 animate-fadeIn">
      {message}
    </div>
  );
}
