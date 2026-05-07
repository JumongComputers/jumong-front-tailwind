"use client";

import { addToCart } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store/hooks";

interface Product {
  _id: string;
  name: string;
  price: number;
  images?: string[];
}

interface Props {
  product: Product;
}

const AddToCartButton = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || "/placeholder.png",
        quantity: 1,
      })
    );
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition font-semibold"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;