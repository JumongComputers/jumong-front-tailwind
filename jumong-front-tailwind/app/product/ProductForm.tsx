"use client";

import { useState } from "react";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Select an image");

    setLoading(true);

    // 1️⃣ Upload image
    const formData = new FormData();
    formData.append("file", image);

    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadRes.json();

    // 2️⃣ Send product to backend
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: Number(price),
        image: uploadData.url,
      }),
    });

    setLoading(false);
    alert("Product created 🚀");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-xl shadow"
    >
      <input
        type="text"
        placeholder="Product name"
        className="w-full border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="w-full border p-2 rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
      >
        {loading ? "Uploading..." : "Create Product"}
      </button>
    </form>
  );
};

export default ProductForm;