"use client";
import { useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [keyword, setKeyword] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <form
      aria-label="Job search form"
      className="mx-auto mt-10 w-full max-w-4xl rounded-2xl bg-white/80 p-0  ring-1 ring-zinc-200 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-900/70 dark:ring-zinc-800 shadow-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4">
        <label
          htmlFor="location-input"
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
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-200 mr-2">
            Location
          </span>
          <input
            id="location-input"
            name="location"
            placeholder="Location"
            className="w-full bg-white dark:bg-zinc-900/70 text-sm outline-none 
               placeholder:text-zinc-400 
               dark:text-zinc-100 dark:placeholder:text-zinc-500 
               py-4 text-black 
               transition-colors duration-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-required="false"
          />
          <span
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-focus-within:w-full"
            aria-hidden="true"
          ></span>
        </label>

        <label
          htmlFor="keyword-input"
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
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-200 mr-2">
            Keyword
          </span>
          <input
            id="keyword-input"
            name="keyword"
            placeholder="Keyword"
            className="w-full bg-white dark:bg-zinc-900/70 text-sm outline-none 
               placeholder:text-zinc-400 
               dark:text-zinc-100 dark:placeholder:text-zinc-500 
               py-3 text-black 
               transition-colors duration-300"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            aria-required="false"
          />
          <span
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-focus-within:w-full"
            aria-hidden="true"
          ></span>
        </label>

        <label
          htmlFor="salary-input"
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
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-200 mr-2">
            Salary Range
          </span>
          <input
            id="salary-input"
            name="salary"
            placeholder="Salary Range"
            className="w-full bg-white dark:bg-zinc-900/70 text-sm outline-none 
               placeholder:text-zinc-400 
               dark:text-zinc-100 dark:placeholder:text-zinc-500 
               py-3 text-black 
               transition-colors duration-300"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            aria-required="false"
          />
          <span
            className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-focus-within:w-full"
            aria-hidden="true"
          ></span>
        </label>

        <div className="flex items-stretch ml-auto">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-10 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/30 transition hover:translate-y-[-1px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto h-9/12 m-auto mr-4"
            aria-label="Search jobs"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </form>
  );
}
