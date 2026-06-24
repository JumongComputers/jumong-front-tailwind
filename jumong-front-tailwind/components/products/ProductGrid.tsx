"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";
import { addToCart } from "@/store/slices/cartSlice";
import { blurImage, optimizeImage } from "@/app/utils/image";

const ProductGrid = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // 🔄 Loading Skeleton
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white p-4 rounded shadow animate-pulse">
            <div className="h-40 bg-gray-200 rounded mb-3" />
            <div className="h-4 bg-gray-200 mb-2 rounded" />
            <div className="h-4 bg-gray-200 w-1/2 mb-3 rounded" />
            <div className="h-8 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  // ❌ Error State
  if (error) {
    return <p className="p-6 text-red-500">Failed to load products</p>;
  }

  // 📭 Empty State
  if (!items?.length) {
    return <p className="p-6 text-gray-500">No products available</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {items.map((product) => {
        const productId = product._id;

        // ✅ Correct field (images array)
       const rawImage = product.images?.[0];

const primaryImage =
  rawImage &&
  (rawImage.startsWith("http://") ||
    rawImage.startsWith("https://") ||
    rawImage.startsWith("/"))
    ? rawImage
    : "/d.jpg"; 

        return (
          <Link href={`/product/${productId}`} key={productId}>
            <div className="bg-white border rounded-lg p-4 hover:shadow-md transition flex flex-col cursor-pointer">
              
              {/* 🔥 Optimized Next Image */}
              <div className="relative w-full h-40 mb-3">
                <Image
                  src={optimizeImage(primaryImage, 400)}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                  placeholder="blur"
                  blurDataURL={blurImage(primaryImage)}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              <h2 className="font-medium text-sm line-clamp-2 min-h-[40px]">
                {product.name}
              </h2>

              <p className="text-orange-600 font-bold mt-1">
                ₦{Number(product.price || 0).toLocaleString()}
              </p>

              {/* 🛒 Add to Cart */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // 🚨 STOP navigation
                  dispatch(
                    addToCart({
                      id: productId,
                      name: product.name,
                      price: product.price,
                      image: primaryImage,
                      quantity: 1,
                    })
                  );
                }}
                className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition text-black py-2 rounded font-medium"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;