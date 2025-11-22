// import React from "react";

// export default function PaymentMethodCard({
//   icon,
//   name,
//   desc,
//   active,
//   disabled,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={disabled ? undefined : onClick}
//       className={`min-w-[220px] flex-1 rounded-xl p-5 border transition-all duration-300 cursor-pointer
//       ${disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}
//       ${
//         active
//           ? "border-[var(--gold)] bg-[rgba(106,13,173,0.15)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] translate-y-0"
//           : "hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
//       }
//       bg-[var(--glass)] border-[var(--glass-border)] backdrop-blur-md`}
//     >
//       <div className="text-3xl text-[var(--gold)] mb-3">{icon}</div>
//       <h4 className="font-semibold mb-1">{name}</h4>
//       <p className="text-sm opacity-80">{desc}</p>
//     </div>
//   );
// }

// src/component/paymentPage/PaymentMethodCard.jsx
import React from "react";

export default function PaymentMethodCard({
  icon,
  name,
  desc,
  active = false,
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-pressed={active}
      className={`
        min-w-[220px] flex-1 rounded-xl p-5 border transition-all duration-300 text-left
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${
          active
            ? "border-[var(--gold)] bg-[rgba(106,13,173,0.15)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] translate-y-0"
            : "hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
        }
        bg-[var(--glass)] border-[var(--glass-border)] backdrop-blur-md
      `}
      style={{
        // use inline pointerEvents to avoid accidental global classes overriding it
        pointerEvents: disabled ? "none" : "auto",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl text-[var(--gold)] mb-0">{icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{name}</h4>
          <p className="text-sm opacity-80">{desc}</p>
        </div>
      </div>
    </button>
  );
}
