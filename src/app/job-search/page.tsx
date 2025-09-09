import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CityPills from "@/components/CityPills";
import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata = {
  title: "Job Search – Jobify",
  description: "Find jobs and plan your next future with us!",
};

export default function JobSearchPage() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-white to-sky-50 dark:from-zinc-950 dark:to-zinc-900 flex flex-col justify-between">
      <Navbar />

      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-12 sm:pt-16 md:pt-20">
        <Hero />

        <SearchBar />
        <CityPills />
      </section>

      <div>
        <Image
          src="/images/CityLandscape.svg"
          alt="Jobify logo"
          width={100}
          height={100}
          className="w-full"
          priority
        />
      </div>
    </main>
  );
}
