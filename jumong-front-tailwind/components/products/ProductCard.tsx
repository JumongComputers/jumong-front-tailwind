import Image from "next/image";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductProps) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition">

      <div className="relative h-55">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2">{name}</h3>

        <p className="text-blue-600 font-bold">${price}</p>

        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700">
          View Details
        </button>
      </div>

    </div>
  );
};