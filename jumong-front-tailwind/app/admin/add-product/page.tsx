// import ProductForm from "@/components/products/ProductForm";

import ProductForm from "@/app/product/ProductForm";

// import { useRouter } from "next/navigation";



export default function AddProductPage() {


  return (
    <div className="p-6 max-w-xl mx-auto mt-[9em] bg-white rounded-lg shadow-md ">
      <h1 className="text-xl font-bold mb-4">Add New Product</h1>
      <ProductForm />
    </div>
  );
}