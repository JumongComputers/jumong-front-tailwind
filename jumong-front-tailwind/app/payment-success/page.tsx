"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { clearCart } from "@/store/slices/cartSlice";

const PaymentSuccess = () => {
  const params = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const reference = params.get("reference");

    const verify = async () => {
      const res = await fetch(`/api/verify?reference=${reference}`);
      const data = await res.json();

      if (data?.data?.status === "success") {
        dispatch(clearCart());
      }
    };

    if (reference) verify();
  }, [params, dispatch]);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-2">Your order has been placed.</p>
    </div>
  );
};

export default PaymentSuccess;