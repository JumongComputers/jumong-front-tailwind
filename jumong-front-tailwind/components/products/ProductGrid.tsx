"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import { addToCart } from "@/store/slices/cartSlice";

const ProductGrid = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {Array.isArray(items) &&
        items.map((product) => {
          const productId = product.id ?? product._id;
          const imageSrc = product.image
            ? product.image.replace(
                "/upload/",
                "/upload/f_auto,q_auto,w_500/",
              )
            : "/placeholder.png";

          return (
            <div
              key={productId}
              className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={imageSrc}
                alt={product.name}
                className="h-40 w-full object-cover mb-3"
              />

              <h2 className="font-semibold text-sm">{product.name}</h2>

              <p className="text-orange-600 font-bold">
                ₦{Number(product.price || 0).toLocaleString()}
              </p>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: productId,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    }),
                  )
                }
                className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductGrid;
