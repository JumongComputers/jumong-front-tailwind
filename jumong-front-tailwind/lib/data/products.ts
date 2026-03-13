export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "HP EliteBook 830 G6",
    price: 550,
    category: "Laptop",
    image: "/products/hp-830.jpg",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    price: 900,
    category: "Laptop",
    image: "/products/dell-xps.jpg",
  },
  {
    id: 3,
    name: "Logitech Wireless Mouse",
    price: 40,
    category: "Accessories",
    image: "/products/mouse.jpg",
  },
  {
    id: 4,
    name: "HP 24\" Monitor",
    price: 180,
    category: "Monitor",
    image: "/products/monitor.jpg",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 90,
    category: "Accessories",
    image: "/products/keyboard.jpg",
  },
];