"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/slices/productSlice";

const AdminProductTable = () => {
  const dispatch = useAppDispatch();

  const { items, loading, error } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="p-6">Loading products...</p>;
  }

  if (error) {
    return (
      <p className="p-6 text-red-500">
        Failed to load products
      </p>
    );
  }

  if (!items?.length) {
    return (
      <div className="p-10 text-center text-gray-500">
        No products created yet
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">Image</th>
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((product) => {
            const image =
              product.images?.[0] || "/placeholder.png";

            return (
              <tr
                key={product._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <div className="relative h-16 w-16 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>

                <td className="p-4 font-medium">
                  {product.name}
                </td>

                <td className="p-4 text-orange-600 font-semibold">
                  ₦{Number(product.price).toLocaleString()}
                </td>

                <td className="p-4">
                  <div className="flex gap-3">
                    <Link
                      href={`/product/${product._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </Link>

                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductTable;