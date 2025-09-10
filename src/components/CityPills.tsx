type CityPillsProps = {
  cities?: string[];
};

export default function CityPills({
  cities = [
    "Jobs in California",
    "Jobs in Arizona",
    "Jobs in Washington",
    "Jobs in New York",
    "Jobs in Florida",
  ],
}: CityPillsProps) {
  return (
    <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-3 px-4">
      {cities.map((city) => (
        <button
          key={city}
          className="rounded-full border border-zinc-200 bg-[color:#F9FBFF] px-4 py-2 text-xs font-medium text-zinc-400 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-zinc-800 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          aria-label={city}
        >
          {city}
        </button>
      ))}
    </div>
  );
}
