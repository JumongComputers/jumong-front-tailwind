"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/store/slices/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">
          Looks like you haven’t added anything yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        
        {/* LEFT - CART ITEMS */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-semibold border-b pb-4 mb-4">
            Shopping Cart
          </h1>

          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b py-4 items-center"
            >
              {/* IMAGE */}
              <div className="w-24 h-24 relative">
                <Image
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* DETAILS */}
              <div className="flex-1">
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-sm text-green-600">In Stock</p>

                {/* ACTIONS */}
                <div className="flex items-center gap-3 mt-2">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Qty: {i + 1}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* PRICE */}
              <div className="font-semibold text-lg">
                ₦{item.price.toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-lg font-semibold mb-4">
            Subtotal ({items.length} items)
          </h2>

          <p className="text-2xl font-bold mb-6">
            ₦{subtotal.toLocaleString()}
          </p>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded font-semibold">
            Proceed to Checkout
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-3 text-sm text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}