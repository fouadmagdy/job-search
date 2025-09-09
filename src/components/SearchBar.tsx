"use client";
import { useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <form
      aria-label="Job search form"
      className="mx-auto mt-10 w-full max-w-3xl rounded-2xl bg-white/80 p-0  ring-1 ring-zinc-200 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-900/70 dark:ring-zinc-800 shadow-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4">
        <label
          className="group relative flex items-center gap-3 px-4 py-3 
             ring-1 ring-zinc-200 dark:ring-zinc-700
             focus-within:ring-2 focus-within:ring-blue-500
             transition-all duration-300 ease-in-out
             focus-within:shadow-lg focus-within:scale-[1.02]"
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
            borderRight: "1px solid #DDE0F0",
          }}
        >
          <span className="sr-only">Location</span>
          <input
            aria-label="Location"
            placeholder="Location"
            className="w-full bg-white dark:bg-zinc-900/70 text-sm outline-none 
               placeholder:text-zinc-400 
               dark:text-zinc-100 dark:placeholder:text-zinc-500 
               py-3 text-black 
               transition-colors duration-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-focus-within:w-full"></span>
        </label>

        <label
          className="group relative flex items-center gap-3 px-4 py-3 
             ring-1 ring-zinc-200 dark:ring-zinc-700
             focus-within:ring-2 focus-within:ring-blue-500
             transition-all duration-300 ease-in-out
             focus-within:shadow-lg focus-within:scale-[1.02]"
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
            borderRight: "1px solid #DDE0F0",
          }}
        >
          <span className="sr-only">Keyword</span>
          <input
            aria-label="Keyword"
            placeholder="Keyword"
            className="w-full bg-white dark:bg-zinc-900/70 text-sm outline-none 
               placeholder:text-zinc-400 
               dark:text-zinc-100 dark:placeholder:text-zinc-500 
               py-3 text-black 
               transition-colors duration-300"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-focus-within:w-full"></span>
        </label>

        <label
          className="group relative flex items-center gap-3 px-4 py-3 
             ring-1 ring-zinc-200 dark:ring-zinc-700
             focus-within:ring-2 focus-within:ring-blue-500
             transition-all duration-300 ease-in-out
             focus-within:shadow-lg focus-within:scale-[1.02]"
          style={{
            outline: "none",
            border: "none",
            boxShadow: "none",
          }}
        >
          <span className="sr-only">Salary Range</span>
          <input
            aria-label="Salary Range"
            placeholder="Salary Range"
            className="w-full bg-white dark:bg-zinc-900/70 text-sm outline-none 
               placeholder:text-zinc-400 
               dark:text-zinc-100 dark:placeholder:text-zinc-500 
               py-3 text-black 
               transition-colors duration-300"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-focus-within:w-full"></span>
        </label>

        <div className="flex items-stretch ml-auto">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:translate-y-[-1px] hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:w-auto h-9/12 m-auto mr-4"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </form>
  );
}
