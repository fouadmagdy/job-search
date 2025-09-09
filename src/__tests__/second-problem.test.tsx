import { fetchAllJobs, fetchJob } from "../app/problems/second-problem";

describe("fetchJob", () => {
  it("fetches a job by id", async () => {
    const job = await fetchJob(101);
    expect(job).toEqual({ id: 101, title: "Frontend Developer" });
  });
});

describe("fetchAllJobs", () => {
  it("fetches all jobs by ids in order", async () => {
    const jobIds = [101, 102, 103];
    const jobs = await fetchAllJobs(jobIds);
    expect(jobs).toEqual([
      { id: 101, title: "Frontend Developer" },
      { id: 102, title: "Backend Developer" },
      { id: 103, title: "UX Designer" },
    ]);
  });
});
