const input = [
  "Frontend Developer ",
  "backend developer",
  "Frontend developer",
  "  UX Designer",
];

export function jobTitles(titles: string[]): string[] {
  // trim each title, convert to lowercase
  const formattedTitles = titles.map((title) => title.trim().toLowerCase());
  // remove duplicates
  const uniqueTitles = [...new Set(formattedTitles)];
  return uniqueTitles;
}

const output = jobTitles(input);
console.log(output);
