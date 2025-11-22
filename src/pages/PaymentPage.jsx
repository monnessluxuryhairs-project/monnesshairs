// src/pages/PaymentPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PaymentContainer from "../component/paymentPage/PaymentContainer";
import OrderSummary from "../component/paymentPage/OrderSummary";
import PaymentMethods from "../component/paymentPage/PaymentMethods";
import CustomerInfo from "../component/paymentPage/CustomerInfo";
import CardForm from "../component/paymentPage/forms/CardForm";
import TransferForm from "../component/paymentPage/forms/TransferForm";
import DVAForm from "../component/paymentPage/forms/DVAForm";
import ErrorMessage from "../component/paymentPage/ErrorMessage";
import Terms from "../component/paymentPage/Terms";

/* default fallback order */
const DEFAULT_ORDER = {
  id: 1,
  title: "Brazilian Body Wave",
  price: 45000,
  currency: "NGN",
  image: "/product1.jpg",
};

function formatNumber(num) {
  if (typeof num !== "number") num = Number(num) || 0;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const fromState = location?.state?.product;
  const stored =
    typeof window !== "undefined"
      ? sessionStorage.getItem("selectedProduct")
      : null;
  const parsedStored = stored ? JSON.parse(stored) : null;
  const initialOrder = fromState || parsedStored || DEFAULT_ORDER;

  const [order] = useState(initialOrder);
  const [method, setMethod] = useState("card"); // 'card' | 'transfer' | 'dva'
  const [error, setError] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  const [dva, setDva] = useState({
    bank: "Generating...",
    number: "Generating...",
    expiryMinutes: 20,
  });
  const dvaTimerRef = useRef(null);

  useEffect(() => {
    if (fromState) {
      try {
        sessionStorage.setItem("selectedProduct", JSON.stringify(fromState));
      } catch (e) {}
    }
    document.title = `Checkout — ${order.title}`;
    // animate in handled by child components
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (order.currency !== "NGN" && method !== "card") {
      setMethod("card");
    }
  }, [order.currency, method]);

  useEffect(() => {
    return () => {
      if (dvaTimerRef.current) clearInterval(dvaTimerRef.current);
    };
  }, []);

  /* helpers */
  function detectCardType(number) {
    const n = number.replace(/\s/g, "");
    if (/^4/.test(n)) return "Visa";
    if (/^5[1-5]/.test(n)) return "Mastercard";
    if (/^506[0-1]/.test(n)) return "Verve";
    return "";
  }

  function formatCardNumber(val) {
    const digits = val.replace(/\D/g, "").slice(0, 19);
    return digits.match(/.{1,4}/g)?.join(" ") || digits;
  }

  function onCardNumberInput(value) {
    const v = formatCardNumber(value);
    setCardNumber(v);
    setCardType(detectCardType(v));
  }

  function onExpiryInput(value) {
    let v = value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    setCardExpiry(v);
  }

  function showError(msg) {
    setError(msg);
    setTimeout(() => setError(""), 5000);
  }

  function validateCustomerInfo() {
    if (!customerEmail || !customerPhone) {
      showError("Please fill in your email and phone number");
      return false;
    }
    return true;
  }

  function validateCardDetails() {
    if (!validateCustomerInfo()) return false;
    const digits = cardNumber.replace(/\s/g, "");
    if (digits.length < 16) {
      showError("Please enter a valid card number");
      return false;
    }
    if (!cardExpiry.includes("/") || cardExpiry.length !== 5) {
      showError("Please enter expiry in MM/YY");
      return false;
    }
    if (cardCvv.length < 3) {
      showError("Please enter a valid CVV");
      return false;
    }
    if (!cardName) {
      showError("Please enter the name on your card");
      return false;
    }
    return true;
  }

  /* DVA */
  function generateDVA() {
    const randomAccount = Math.floor(1000000000 + Math.random() * 9000000000);
    setDva((prev) => ({
      ...prev,
      bank: "Wema Bank",
      number: randomAccount,
      expiryMinutes: 20,
    }));

    let minutes = 20;
    if (dvaTimerRef.current) clearInterval(dvaTimerRef.current);
    dvaTimerRef.current = setInterval(() => {
      minutes--;
      setDva((prev) => ({ ...prev, expiryMinutes: minutes }));
      if (minutes <= 0) {
        clearInterval(dvaTimerRef.current);
        setDva((prev) => ({ ...prev, expiryMinutes: 0 }));
      }
    }, 60_000);
  }

  /* Paystack / Pay (mock) */
  function handlePay() {
    if (!validateCardDetails()) return;
    if (typeof window !== "undefined" && window.PaystackPop) {
      const handler = window.PaystackPop.setup({
        key: "pk_test_your_paystack_key",
        email: customerEmail,
        amount: order.price * 100,
        currency: order.currency,
        ref: "MONNESS" + Math.floor(Math.random() * 1000000000 + 1),
        callback: function () {
          navigate("/thank-you");
        },
        onClose: function () {
          showError("Payment window was closed");
        },
      });
      handler.openIframe();
    } else {
      setTimeout(() => navigate("/thank-you"), 800);
    }
  }

  function openWhatsAppReceipt(text) {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/message/4NQ2COIZ2DLBA1?text=${encoded}`;
    window.open(url, "_blank");
  }

  function onUploadReceipt() {
    if (!customerEmail || !customerPhone) {
      showError("Please fill in your email and phone number first");
      return;
    }
    const text = `Payment Receipt for ${order.title}\nAmount: ${
      order.currency === "NGN"
        ? "₦" + formatNumber(order.price)
        : `${order.currency} ${order.price}`
    }\nCustomer Email: ${customerEmail}\nCustomer Phone: ${customerPhone}\nTransaction Reference: MONNESS${Math.floor(
      Math.random() * 100000
    )}`;
    openWhatsAppReceipt(text);
  }

  function onUploadDvaReceipt() {
    if (!customerEmail || !customerPhone) {
      showError("Please fill in your email and phone number first");
      return;
    }
    const text = `DVA Payment Receipt for ${order.title}\nAmount: ${
      order.currency === "NGN"
        ? "₦" + formatNumber(order.price)
        : `${order.currency} ${order.price}`
    }\nAccount: ${dva.number}\nBank: ${
      dva.bank
    }\nCustomer Email: ${customerEmail}\nCustomer Phone: ${customerPhone}`;
    openWhatsAppReceipt(text);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/80 to-[rgba(3,1,5,0.6)] text-[var(--milk)] p-6 md:p-12">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-col gap-8 items-center">
        <div className="flex-shrink-0 w-full lg:w-1/2 flex flex-col gap-6 items-center">
          <h1 className="payment-title text-3xl md:text-4xl font-bold mb-2">
            Complete Your Purchase
          </h1>

          <OrderSummary order={order} />

          <PaymentMethods
            method={method}
            setMethod={(m) => {
              setMethod(m);
              if (m === "dva") generateDVA();
            }}
            orderCurrency={order.currency}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-md">
            <div className="payment-forms bg-[var(--glass)] backdrop-blur rounded-xl p-6 border border-[var(--glass-border)] shadow-md animate-fadeInUp">
              <ErrorMessage message={error} />

              <CustomerInfo
                customerEmail={customerEmail}
                setCustomerEmail={setCustomerEmail}
                customerPhone={customerPhone}
                setCustomerPhone={setCustomerPhone}
              />
              <PaymentMethods
                method={method}
                onSelect={(m) => {
                  setMethod(m);
                  if (m === "dva") {
                    // ensure generateDVA is called when user selects DVA
                    generateDVA();
                  }
                }}
              />

              {method === "card" && (
                <CardForm
                  cardNumber={cardNumber}
                  onCardNumberInput={onCardNumberInput}
                  cardExpiry={cardExpiry}
                  onExpiryInput={onExpiryInput}
                  cardCvv={cardCvv}
                  setCardCvv={setCardCvv}
                  cardName={cardName}
                  setCardName={setCardName}
                  cardType={cardType}
                  handlePay={handlePay}
                />
              )}

              {method === "transfer" && (
                <TransferForm order={order} onUploadReceipt={onUploadReceipt} />
              )}

              {method === "dva" && (
                <DVAForm
                  order={order}
                  dva={dva}
                  onUploadDvaReceipt={onUploadDvaReceipt}
                />
              )}

              <Terms />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
