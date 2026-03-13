import { products } from "@/lib/data/products";
import { ProductCard } from "./ProductCard";
// import { products } from "@/lib/data/products";

// const products = [
//   {
//     id: 1,
//     name: "HP EliteBook 830 G6",
//     price: 550,
//     image: "/products/laptop1.jpg",
//   },
//   {
//     id: 2,
//     name: "Dell XPS 13",
//     price: 900,
//     image: "/products/laptop2.jpg",
//   },
//   {
//     id: 3,
//     name: "MacBook Pro M1",
//     price: 1200,
//     image: "/products/laptop3.jpg",
//   },
//   {
//     id: 4,
//     name: "Lenovo ThinkPad X1",
//     price: 800,
//     image: "/products/laptop4.jpg",
//   },
// ];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}

    </div>
  );
};