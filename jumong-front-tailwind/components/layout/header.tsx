"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLogin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const isActive = (path: string) => pathname === path;
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow z-50 font-bold py-3">
        <div className="container mx-auto flex justify-between items-center px-2 lg:px-0">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-[#2A1870]">
            <Image
              src="/jumong-logo.jpeg"
              alt="logo"
              width={40}
              height={40}
            />
            <span>JMG Computers</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {menuItems.map((item) => (
              <li key={item.href} className="group relative cursor-pointer">
                <Link href={item.href}>
                  <span className="flex">
                    {item.label.split("").map((letter, idx) => (
                      <span
                        key={idx}
                        className={`inline-block transition-transform duration-300 ease-in-out text-[#2A1870] ${
                          isActive(item.href) ? "text-[#2A1870]" : ""
                        } group-hover:-translate-y-2`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>

                  {/* Optional underline for active page */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2A1870] transition-all duration-300 group-hover:w-full ${
                      isActive(item.href) ? "w-full" : ""
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Login */}
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md border border-transparent text-[#2A1870] hover:border-[#2A1870] hover:bg-[#2A1870] hover:text-white transition"
          >
            <MdLogin />
            <span className="text-[#2A1870] hover:text-white transition ease-in-out">LOGIN</span>
          </Link>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <GiHamburgerMenu size={34} />
          </button>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="container mx-auto px-2 mt-3 pb-3 md:w-1/2"
        >
          <div className="relative flex items-center border border-[#2A1870] rounded-md">
            <FiSearch className="absolute left-3 text-[#2A1870]" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search laptops, accessories, services..."
              className="w-full rounded-md border pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A1870]"
            />
          </div>
        </form>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } backdrop-blur-[2px]`}
        onClick={closeMobileMenu}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div
          className={`absolute top-0 right-0 h-full bg-white text-[#2A1870] shadow-lg p-3 flex flex-col gap-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-right font-extrabold text-[1.5rem]"
            onClick={closeMobileMenu}
          >
            ✕
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col gap-4 text-[16px] mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 mt-3"
            >
              <MdLogin />
              <span>LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};