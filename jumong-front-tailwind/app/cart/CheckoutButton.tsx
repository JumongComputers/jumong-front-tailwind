"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/slices/cartSlice";

const CheckoutButton = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        email: "customer@email.com", // replace later
        amount: total,
      }),
    });

    const data = await res.json();

    if (data?.data?.authorization_url) {
      window.location.href = data.data.authorization_url;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full bg-green-600 text-white py-3 rounded mt-4 hover:bg-green-700"
    >
      Checkout (₦{total.toLocaleString()})
    </button>
  );
};

export default CheckoutButton;