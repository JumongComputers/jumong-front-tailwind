import { FeaturedProducts } from "@/components/layout/featuredProduct";
import { Hero } from "@/components/layout/hero";

export default function Home() {
  return (
    <main className="w-full flex flex-col my-10 gap-10">
      {/* HERO SECTION */}
      <section className="w-full">
        <Hero />
        <FeaturedProducts/>
      </section>

      {/* NEXT SECTIONS (future) */}
      {/* 
      <section className="w-full">
        <Categories />
      </section>

      <section className="w-full">
        <FeaturedProducts />
      </section>
      */}
    </main>
  );
}