"use client";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`lg:mx-auto flex max-w-7xl items-center justify-between gap-6 lg:gap-20 px-4 py-4 sm:px-6 lg:px-8  ${
        menuOpen ? "flex-col md:flex-row" : ""
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-bold"
        tabIndex={0}
        aria-label="Homepage"
      >
        <Image
          src="/images/logo.svg"
          alt="Jobify logo"
          width={25}
          height={25}
          className="rounded-full"
          priority
        />
        <span className="text-zinc-900 dark:text-zinc-100">Jobify</span>
      </Link>

      {/* Desktop Nav */}
      <div
        className="hidden lg:flex items-center gap-6"
        role="menubar"
        aria-label="Primary"
      >
        <div className="space-x-4 text-sm font-semibold">
          <Link
            className="transition-colors text-zinc-700 hover:text-blue-700 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:hover:text-white pr-6 focus:outline-2 focus:outline-blue-400"
            href="/"
            role="menuitem"
            tabIndex={0}
          >
            Featured Jobs
          </Link>
          <Link
            className="transition-colors text-zinc-700 hover:text-blue-700 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:hover:text-white pr-6 focus:outline-2 focus:outline-blue-400"
            href="/projects"
            role="menuitem"
            tabIndex={0}
          >
            Salary Trend
          </Link>
          <Link
            className="transition-colors text-zinc-700 hover:text-blue-700 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:hover:text-white pr-6 focus:outline-2 focus:outline-blue-400"
            href="/blog"
            role="menuitem"
            tabIndex={0}
          >
            Where To Fly
          </Link>
          <Link
            className="transition-colors text-zinc-700 hover:text-blue-700 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:hover:text-white pr-6 focus:outline-2 focus:outline-blue-400"
            href="/about"
            role="menuitem"
            tabIndex={0}
          >
            Covid Policy
          </Link>
          <Link
            className="transition-colors text-zinc-700 hover:text-blue-700 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:hover:text-white focus:outline-2 focus:outline-blue-400"
            href="/contact"
            role="menuitem"
            tabIndex={0}
          >
            Blog
          </Link>
        </div>
      </div>

      <div
        className="hidden lg:flex items-center gap-6"
        role="menubar"
        aria-label="Secondary"
      >
        <div className="space-x-4 text-sm font-semibold flex">
          <Link
            href="#"
            className="hidden rounded-md px-6 py-2 text-sm  text-zinc-700 hover:bg-blue-100  dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 md:inline-flex focus:outline-2 focus:outline-blue-400"
            role="menuitem"
            tabIndex={0}
          >
            Help
          </Link>
          <Link
            href="#"
            className="rounded-md px-6 py-2  text-sm  text-zinc-700 transition-colors hover:bg-blue-100  dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700 dark:hover:bg-zinc-700 focus:outline-2 focus:outline-blue-400"
            role="menuitem"
            tabIndex={0}
          >
            Login
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <div className="lg:hidden flex items-center gap-4 ">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-500 text-xl cursor-pointer focus:outline-2 focus:outline-blue-400"
          title="Menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 px-6 py-4 space-y-2 text-center"
          role="menu"
          aria-label="Mobile navigation"
        >
          <Link
            className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-700 focus:outline-2 focus:outline-blue-400"
            href="/"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Featured Jobs
          </Link>
          <Link
            className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-700 focus:outline-2 focus:outline-blue-400"
            href="/projects"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Salary Trend
          </Link>
          <Link
            className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-700 focus:outline focus:outline-2 focus:outline-blue-400"
            href="/blog"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Where To Fly
          </Link>
          <Link
            className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-700 focus:outline focus:outline-2 focus:outline-blue-400"
            href="/about"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Covid Policy
          </Link>
          <Link
            className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-700 focus:outline focus:outline-2 focus:outline-blue-400"
            href="/contact"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
