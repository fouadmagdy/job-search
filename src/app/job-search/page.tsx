import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CityPills from "@/components/CityPills";

export const metadata = {
  title: "Job Search – Jobify",
  description: "Find jobs and plan your next future with us!",
};

export default function JobSearchPage() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-white to-sky-50 dark:from-zinc-950 dark:to-zinc-900">
      <Navbar />

      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-12 sm:pt-16 md:pt-20">
        <div className="text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
            Find jobs and plan your next future with us!
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            Start job search at America&#39;s No.1 Jobs site. Browse latest jobs
            in America and find your dream job.
          </p>
        </div>

        <SearchBar />
        <CityPills />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-28 w-full select-none items-end justify-center overflow-hidden md:flex"
        >
          <svg
            className="h-full w-[120%] text-sky-200 dark:text-zinc-800"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,0V27.35C151.63,65.43,335.1,92.84,600,92.84S1048.37,65.43,1200,27.35V0Z" />
          </svg>
        </div>
      </section>
    </main>
  );
}
