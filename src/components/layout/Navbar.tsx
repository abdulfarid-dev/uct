"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Product", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "About Us", href: "#about" },
  { label: "Support", href: "#support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();
    if (query) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <header className="relative z-50 w-full border-b border-slate-200/80 bg-white text-[#171717]">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:h-[78px] lg:px-10">
        {/* UCT Logo */}
        <Link
          href="/"
          aria-label="UniConverge Technologies home"
          className="mr-5 flex shrink-0 items-center sm:mr-8"
        >
          <Image
            src="/images/brand/logo.png"
            alt="UCT Logo"
            width={75}
            height={52}
            priority
            className="h-[48px] w-[70px] object-contain lg:h-[52px] lg:w-[75px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-6 xl:gap-9">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative whitespace-nowrap py-2 text-[13px] font-medium text-slate-700 transition-colors duration-200 hover:text-[#3212b8] xl:text-[14px]"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-[#3212b8] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-6 lg:gap-4">
          {/* Search */}
          <div className="relative hidden sm:flex sm:items-center">
            {searchOpen ? (
              <form
                onSubmit={handleSearch}
                className="flex h-10 w-[190px] items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 transition focus-within:border-[#3212b8] focus-within:bg-white"
              >
                <Search
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-slate-500"
                />

                <input
                  autoFocus
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search"
                  aria-label="Search"
                  className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  aria-label="Close search"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearch("");
                  }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-200 hover:text-black"
                >
                  <X size={15} />
                </button>
              </form>
            ) : (
              <button
                type="button"
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition duration-200 hover:bg-slate-100 hover:text-[#3212b8]"
              >
                <Search size={20} strokeWidth={1.8} />
              </button>
            )}
          </div>

          {/* Shopping Cart */}
          <a
            href="https://uctrobotics.com/shop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit store"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-slate-700 transition duration-200 hover:border-slate-200 hover:bg-slate-50 hover:text-[#3212b8]"
          >
            <ShoppingCart
              size={20}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Enquiry Button */}
          <a
            href="mailto:info@uniconvergetech.in?subject=Product%20Enquiry"
            className="group inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3.5 text-[12px] font-semibold text-white shadow-sm transition duration-200 hover:bg-[#260d91] hover:shadow-md sm:px-5 sm:text-[13px]"
          >
            Enquiry Now
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-t border-slate-100 bg-white px-5 py-3 shadow-lg lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-slate-100 py-3.5 text-sm font-medium text-slate-700 transition-colors last:border-b-0 hover:text-[#3212b8]"
            >
              {item.label}
              <ArrowUpRight size={15} className="text-slate-400" />
            </Link>
          ))}

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="mt-3 flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3"
          >
            <Search size={17} className="text-slate-500" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              aria-label="Search"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

            <button type="submit" aria-label="Submit search">
              <ArrowUpRight size={17} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}