"use client";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8 ${
          menuOpen ? "flex-col md:flex-row" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
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
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm font-medium">
            <Link
              className="transition-colors text-zinc-700 hover:text-zinc-900 dark:hover:text-white"
              href="/"
            >
              Featured Jobs
            </Link>
            <Link
              className="transition-colors text-zinc-700 hover:text-zinc-900 dark:hover:text-white"
              href="/projects"
            >
              Salary Trend
            </Link>
            <Link
              className="transition-colors text-zinc-700 hover:text-zinc-900 dark:hover:text-white"
              href="/blog"
            >
              Where To Fly
            </Link>
            <Link
              className="transition-colors text-zinc-700 hover:text-zinc-900 dark:hover:text-white"
              href="/about"
            >
              Covid Policy
            </Link>
            <Link
              className="transition-colors text-zinc-700 hover:text-zinc-900 dark:hover:text-white"
              href="/contact"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm font-medium">
            <ThemeToggle />
            <Link
              href="#"
              className="hidden rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-blue-100  dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 md:inline-flex"
            >
              Help
            </Link>
            <Link
              href="#"
              className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-blue-100 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-zinc-700 dark:hover:bg-zinc-700"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl cursor-pointer"
            title="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 px-6 py-4 space-y-2 text-center">
            <Link
              className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-400"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Featured Jobs
            </Link>
            <Link
              className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-400"
              href="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Salary Trend
            </Link>
            <Link
              className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-400"
              href="/blog"
              onClick={() => setMenuOpen(false)}
            >
              Where To Fly
            </Link>
            <Link
              className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-400"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              Covid Policy
            </Link>
            <Link
              className="block py-2 text-zinc-700 dark:text-zinc-200 transition-colors hover:text-blue-400"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
