import { ProductGrid } from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <section className="mt-35 pb-16">

      <div className="container mx-auto px-2 bg-white border-radius-lg shadow-md p-6">

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Our Products
        </h1>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">

          <input
            type="text"
            placeholder="Search product..."
            className="border rounded-md px-4 py-2 w-full md:w-75"
          />

          <select className="border rounded-md px-4 py-2 w-full md:w-50">
            <option>All Categories</option>
            <option>Laptops</option>
            <option>Accessories</option>
            <option>Monitors</option>
          </select>

        </div>

        {/* Products */}
        <ProductGrid />

      </div>

    </section>
  );
}