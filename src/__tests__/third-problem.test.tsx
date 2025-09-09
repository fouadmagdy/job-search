import { merge } from "../app/problems/third-problem";

describe("merge", () => {
  it("merges jobs with application counts, skipping jobs with no applications", () => {
    const applications = [
      { jobId: 1, userId: "u1" },
      { jobId: 2, userId: "u2" },
      { jobId: 1, userId: "u3" },
      { jobId: 3, userId: "u4" },
    ];
    const jobs = [
      { id: 1, title: "Frontend Developer" },
      { id: 2, title: "Backend Developer" },
      { id: 3, title: "UX Designer" },
      { id: 4, title: "DevOps Engineer" },
    ];
    const expected = [
      { id: 1, title: "Frontend Developer", applicationCount: 2 },
      { id: 2, title: "Backend Developer", applicationCount: 1 },
      { id: 3, title: "UX Designer", applicationCount: 1 },
    ];
    expect(merge(applications, jobs)).toEqual(expected);
  });
});
