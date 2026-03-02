"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLogin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
// import { useRouter } from "next/router";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMediaOpen(false);
  };

  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  // ✅ Desktop active / hover styles
  const desktopLinkClass = (path: string) =>
    `px-3 py-1 rounded-md border transition-all duration-200
   ${
     isActive(path)
       ? "border-blue-700 bg-blue-50 text-blue-700 font-semibold"
       : "border-transparent hover:border-blue-300 hover:bg-blue-50"
   }`;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white text-[#2A1870] py-3 z-50 shadow opacity-300 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center px-2 lg:px-0 font-medium text-[16px]">
          {/* Logo */}
          <Link href="/">
            <div>
              <Image
                src="/jumong-logo.jpeg"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className={desktopLinkClass("/")}>
              HOME
            </Link>

            <Link href="/products" className={desktopLinkClass("/products")}>
              Products
            </Link>

            <Link href="/portfolio" className={desktopLinkClass("/portfolio")}>
              Portfolio
            </Link>

            {/* MEDIA DROPDOWN */}
            {/* <div className="relative group">
              <button
                className={`px-3 py-1 rounded-md border transition-all duration-200
                ${
                  pathname.startsWith("/media")
                    ? "border-blue-700 bg-blue-50 text-blue-700 font-semibold"
                    : "border-transparent hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                MEDIA
              </button>

              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-3 px-4 flex flex-col gap-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/media/e-library">E-Library</Link>
                <Link href="/media/sermons">Sermons</Link>
                <Link href="/media/livestream">Live Stream</Link>
                <Link href="/media/blog">Blog</Link>
              </div>
            </div> */}

            <Link href="/contact" className={desktopLinkClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* Desktop Login */}
          <Link
            href="/login"
            className={`${desktopLinkClass("/login")} hidden md:flex items-center space-x-2`}
          >
            <MdLogin className={isActive("/login") ? "text-blue-700" : ""} />
            <span>LOGIN</span>
          </Link>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <GiHamburgerMenu size={34} />
          </button>
        </div>
        
          <form
  onSubmit={handleSubmit}
  className="container mx-auto px-2 mt-3 pb-3 md:w-1/2"
>
  <div className="relative flex items-center">
    {/* Search Icon */}
    <FiSearch
      className="absolute left-3 text-gray-400"
      size={18}
    />

    {/* Input */}
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search laptops, accessories, services..."
      className="w-full rounded-md border pl-10 pr-4 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</form>
        
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          backdrop-blur-[2px]`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div
          className={`absolute top-0 right-0 h-full bg-white text-[#2A1870] shadow-lg p-3 flex flex-col gap-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-right font-extrabold text-[1.5rem] "
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col gap-4 text-[16px] mt-4">
            <Link href="/" onClick={closeMobileMenu}>
              HOME
            </Link>
            <Link href="/product" onClick={closeMobileMenu}>
              Products
            </Link>
            <Link href="/give" onClick={closeMobileMenu}>
              Portfolio
            </Link>

            {/* MOBILE MEDIA DROPDOWN */}
            {/* <div>
              <button
                onClick={() => setMediaOpen(!mediaOpen)}
                className="w-full flex items-center justify-between"
              >
                <span>MEDIA</span>
                {mediaOpen ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </button>

              {mediaOpen && (
                <div className="flex flex-col gap-2 mt-2 ml-3 text-[15px]">
                  <Link href="/media/e-library" onClick={closeMobileMenu}>
                    E-Library
                  </Link>
                  <Link href="/media/sermons" onClick={closeMobileMenu}>
                    Sermons
                  </Link>
                  <Link href="/media/livestream" onClick={closeMobileMenu}>
                    Live Stream
                  </Link>
                  <Link href="/media/blog" onClick={closeMobileMenu}>
                    Blog
                  </Link>
                </div>
              )}
            </div> */}

            <Link href="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>

          {/* Mobile Login */}
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
    </>
  );
};
