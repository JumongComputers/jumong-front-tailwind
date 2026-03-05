import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  link: string;
}

// Sample products (replace with API data later)
const featuredProducts: Product[] = [
  { id: "1", name: "Laptop Accessories", image: "/i.png", price: 1200, link: "/products/1" },
  { id: "2", name: "i phone 17 ", image: "/iphone 17.jpg", price: 150, link: "/products/2" },
  { id: "3", name: "Custom Built Gaming PC", image: "/pc1.jpg", price: 80, link: "/products/3" },
  { id: "4", name: "High-Performance PC", image: "/pc2.jpg", price: 200, link: "/products/4" },
];

export const FeaturedProducts = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#2A1870] ">Featured Products</h2>

        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg text-[#2A1870]">{product.name}</h3>
                <p className="text-[#2A1870] font-bold mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center ">
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-[#2A1870] text-white rounded-md hover:bg-gray-800 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};