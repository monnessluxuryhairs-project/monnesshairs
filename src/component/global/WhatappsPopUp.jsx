import { useEffect, useState } from "react";

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("+234");
  const [number, setNumber] = useState("");

  // Show popup after 3 seconds if user hasn't subscribed
  useEffect(() => {
    if (!localStorage.getItem("whatsappSubmitted")) {
      const timer = setTimeout(() => {
        setOpen(true);
        document.body.style.overflow = "hidden";
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = country + number.replace(/\D/g, "");

    if (phone.length < 10) {
      alert("Please enter a valid WhatsApp number");
      return;
    }

    // Save subscription
    localStorage.setItem("whatsappSubmitted", "true");

    // Simulate sending message (your API logic)
    try {
      await fetch("https://api.whatsapp.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          message:
            "Thank you for subscribing to Monness Luxury Hairs! You'll be the first to know about our new arrivals.",
        }),
      });
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
    }

    setNumber("");
    closePopup();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1003] transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closePopup}
      />

      {/* POPUP */}
      <div
        className={`fixed top-1/2 left-1/2 w-[90%] max-w-[500px] z-[1004] 
        rounded-xl border border-[rgba(255,255,255,0.2)]
        bg-gradient-to-br from-[rgba(106,13,173,0.9)] to-[rgba(0,0,0,0.9)]
        shadow-2xl backdrop-blur-xl p-8 transform transition-all duration-500
        ${
          open
            ? "-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 visible"
            : "-translate-x-1/2 -translate-y-1/2 scale-75 opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-4 text-white text-3xl cursor-pointer hover:scale-110 transition"
        >
          ×
        </button>

        <h3
          className="text-center text-2xl font-bold mb-4 
        bg-gradient-to-r from-[var(--gold)] to-[var(--milk)]
        bg-clip-text text-transparent"
        >
          Get Notified of New Arrivals
        </h3>

        <p className="text-center text-white/90 mb-6">
          Be the first to know when we add new luxury hair collections. Enter
          your WhatsApp number below to join our exclusive list.
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <select
            className="p-3 rounded-full bg-white/10 border border-[rgba(255,255,255,0.2)] 
            text-white outline-none text-center transition focus:border-[var(--gold)] focus:scale-[1.02]"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="+234">Nigeria (+234)</option>
            <option value="+1">USA (+1)</option>
            <option value="+44">UK (+44)</option>
            <option value="+233">Ghana (+233)</option>
            <option value="+27">South Africa (+27)</option>
            <option value="+254">Kenya (+254)</option>
            <option value="+256">Uganda (+256)</option>
            <option value="+971">UAE (+971)</option>
            <option value="+91">India (+91)</option>
            <option value="+86">China (+86)</option>
          </select>

          <input
            type="tel"
            className="p-3 rounded-full bg-white/10 border border-[rgba(255,255,255,0.2)]
            text-white outline-none text-center focus:border-[var(--gold)] focus:scale-[1.02] transition"
            placeholder="WhatsApp number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <button
            type="submit"
            className="p-3 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--light-purple)]
            text-black font-semibold shadow-lg relative overflow-hidden transition
            hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,215,0,0.6)]"
          >
            Notify Me
          </button>
        </form>
      </div>
    </>
  );
}
