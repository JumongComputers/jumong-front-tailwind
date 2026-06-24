"use client";

import { useState, useEffect, DragEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

const ProductForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // ✅ Cleanup previews (VERY IMPORTANT)
  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  // 📦 Handle file selection
  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);

    // ✅ Basic validation (lightweight, not overkill)
    const validFiles = fileArray.filter((file) => {
      if (!file.type.startsWith("image/")) {
        toast.error(`${file.name} is not an image`);
        return false;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name} is too large (max 2MB)`);
        return false;
      }

      return true;
    });

    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...validFiles]);
    setPreviewUrls((prev) => [...prev, ...newPreviews]);
  };

  // 🖱 Drag & Drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  // ❌ Remove image (with cleanup)
  const removeImage = (index: number) => {
    URL.revokeObjectURL(previewUrls[index]); // ✅ prevent memory leak

    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🚀 Submit clicked");

    if (!name.trim()) {
      toast.error("Product name is required");
      return;
    }

    if (!price || Number(price) <= 0) {
      toast.error("Enter valid price");
      return;
    }

    if (images.length === 0) {
      toast.error("Add at least one image");
      return;
    }

    setLoading(true);

    try {
      const auth = JSON.parse(localStorage.getItem("user") || "{}");

      const token = auth.token;

      console.log("TOKEN:", token);

      if (!token) {
        toast.error("Login required");
        return;
      }

      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", price);

      images.forEach((file) => {
        formData.append("images", file);
      });

      console.log(
        "Uploading files:",
        images.map((f) => f.name),
      );

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      console.log("STATUS:", res.status);

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data.message || "Failed to create product");
      }

      toast.success("Product created successfully");

      setName("");
      setPrice("");
      setImages([]);

      previewUrls.forEach((url) => URL.revokeObjectURL(url));

      setPreviewUrls([]);

      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    } catch (error) {
      console.error("PRODUCT ERROR:", error);

      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-5 bg-white p-6 rounded-xl shadow "
    >
      <h2 className="text-lg font-semibold">Add New Product</h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Product name"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-yellow-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Price */}
      <input
        type="number"
        placeholder="Price"
        className="w-full border p-2 rounded focus:ring-2 focus:ring-yellow-400"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* Drag & Drop */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 p-6 text-center rounded cursor-pointer hover:border-yellow-400"
      >
        <p className="text-sm text-gray-500">
          Drag & drop images here or click to upload
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          id="fileInput"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <label htmlFor="fileInput" className="text-yellow-500 cursor-pointer">
          Browse files
        </label>
      </div>

      {/* Preview */}
      {previewUrls.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {previewUrls.map((url, index) => (
            <div key={index} className="relative">
              <img src={url} className="h-24 w-full object-cover rounded" />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black text-white text-xs px-1 rounded"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-semibold transition disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Create Product"}
      </button>
    </form>
  );
};

export default ProductForm;
