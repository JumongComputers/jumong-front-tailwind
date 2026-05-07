"use client";

import { useState } from "react";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { ShoppingCart, Truck, ShieldCheck, RotateCcw } from "lucide-react";

type Product = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  images: string[];
  stock?: number;
  brand?: string;
  category?: string;
};

type Props = {
  product: Product;
};

const ProductDetails = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);

  const primaryImage =
    product.images?.[0] || "/placeholder.png";

  const increaseQty = () => {
    if (quantity < (product.stock || 10)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        image: primaryImage,
        quantity,
      })
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-8 bg-[#f7f7f7] min-h-screen">
      
      {/* LEFT: IMAGE GALLERY */}
      <div className="lg:col-span-5">
        <div className="sticky top-24">
          <ProductImageGallery
            images={product.images}
            alt={product.name}
          />
        </div>
      </div>

      {/* CENTER: PRODUCT INFO */}
      <div className="lg:col-span-4 space-y-5">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          
          {/* Brand */}
          {product.brand && (
            <p className="text-sm text-blue-600 font-medium">
              {product.brand}
            </p>
          )}

          {/* Name */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
            {product.name}
          </h1>

          {/* Rating Mock */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-yellow-500 text-lg">
              ★★★★★
            </div>

            <span className="text-sm text-gray-500">
              4.8 (120 reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-5">
            <p className="text-3xl font-bold text-orange-600">
              ₦{Number(product.price).toLocaleString()}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Inclusive of VAT
            </p>
          </div>

          {/* Stock */}
          <div className="mt-4">
            {product.stock && product.stock > 0 ? (
              <span className="text-green-600 font-medium">
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="text-red-500 font-medium">
                Out of Stock
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <div className="mt-6">
              <h2 className="font-semibold text-lg mb-2">
                Description
              </h2>

              <p className="text-gray-700 leading-7">
                {product.description}
              </p>
            </div>
          )}

          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Truck className="w-5 h-5 text-green-600" />
              Nationwide Delivery
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Warranty Available
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <RotateCcw className="w-5 h-5 text-orange-600" />
              7-Day Return Policy
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: BUY BOX */}
      <div className="lg:col-span-3">
        <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6 border">
          
          <p className="text-2xl font-bold text-orange-600">
            ₦{Number(product.price).toLocaleString()}
          </p>

          <p className="text-sm text-green-600 mt-2">
            Free delivery in Lagos
          </p>

          {/* Quantity */}
          <div className="mt-5">
            <p className="font-medium mb-2">Quantity</p>

            <div className="flex items-center border rounded-lg w-fit overflow-hidden">
              <button
                onClick={decreaseQty}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>

              <span className="px-5 py-2 font-medium">
                {quantity}
              </span>

              <button
                onClick={increaseQty}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button
              onClick={handleAddToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
              Buy Now
            </button>
          </div>

          {/* Security */}
          <div className="mt-5 border-t pt-4 text-sm text-gray-600 space-y-2">
            <p>🔒 Secure Checkout</p>
            <p>💳 Paystack Payment</p>
            <p>🚚 Fast Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;