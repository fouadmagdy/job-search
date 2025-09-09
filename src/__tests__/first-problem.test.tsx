import { jobTitles } from "../app/problems/first-problem";

describe("jobTitles", () => {
  it("formats and deduplicates job titles", () => {
    const input = [
      "Frontend Developer ",
      "backend developer",
      "Frontend developer",
      "  UX Designer",
    ];
    const expected = ["frontend developer", "backend developer", "ux designer"];
    expect(jobTitles(input)).toEqual(expected);
  });
});
