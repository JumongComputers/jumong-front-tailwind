import AddToCartButton from "@/components/cart/AddtoCartButton";
import ProductImageGallery from "@/components/products/ProductImageGallery";
// import AddToCartButton from "@/components/products/AddToCartButton";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface Product {
  _id: string;
  name: string;
  description?: string;
  images: string[];
  price: number;
  stock?: number;
  brand?: string;
  category?: string;
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
};

const ProductPage = async ({ params }: ProductPageProps) => {
  // ✅ Next.js 15+ async params
  const { id } = await params;

  const product = await fetchProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-500 mb-2">
            Product not found
          </h2>

          <p className="text-gray-500">
            The product you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT - IMAGE GALLERY */}
        <div>
          <ProductImageGallery
            images={product.images || []}
            alt={product.name}
          />
        </div>

        {/* RIGHT - PRODUCT INFO */}
        <div className="space-y-5">
          {/* Product Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            {product.brand && (
              <p className="text-sm text-gray-500 mt-1">
                Brand: {product.brand}
              </p>
            )}
          </div>

          {/* Price */}
          <div className="border-b pb-5">
            <p className="text-3xl font-bold text-orange-600">
              ₦{Number(product.price || 0).toLocaleString()}
            </p>

            <p className="text-sm text-green-600 mt-2">
              In stock
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Product Description
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {product.description ||
                "No description available for this product."}
            </p>
          </div>

          {/* Product Meta */}
          <div className="space-y-2 text-sm">
            {product.category && (
              <div className="flex gap-2">
                <span className="font-medium">Category:</span>
                <span className="text-gray-600">
                  {product.category}
                </span>
              </div>
            )}

            <div className="flex gap-2">
              <span className="font-medium">Availability:</span>

              <span
                className={`font-medium ${
                  (product.stock || 0) > 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {(product.stock || 0) > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <AddToCartButton product={product} />

            <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition font-medium">
              Buy Now
            </button>
          </div>

          {/* DELIVERY INFO */}
          <div className="bg-gray-50 border rounded-xl p-4 space-y-2 text-sm">
            <p className="font-medium">
              🚚 Fast Delivery Available
            </p>

            <p className="text-gray-600">
              Delivery available across Nigeria.
            </p>

            <p className="text-gray-600">
              Secure payments and verified products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;