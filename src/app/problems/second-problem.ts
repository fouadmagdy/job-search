const jobIds = [101, 102, 103];

export async function fetchJob(id: number) {
  const jobs = [
    { id: 101, title: "Frontend Developer" },
    { id: 102, title: "Backend Developer" },
    { id: 103, title: "UX Designer" },
  ];
  // Simulate a job fetch with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // return job matching the id
      resolve(jobs.find((job) => job.id === id));
    }, 1000);
  });
}

export async function fetchAllJobs(jobIds: number[]) {
  // Use Promise.all to fetch all jobs in parallel && order
  return await Promise.all(jobIds.map((id) => fetchJob(id)));
}

fetchAllJobs(jobIds).then((data) => {
  console.log("result", data);
});
