interface Job {
  id: number;
  title: string;
  applicationCount?: number;
}

interface Application {
  jobId: number;
  userId: string;
}

const applications: Application[] = [
  { jobId: 1, userId: "u1" },
  { jobId: 2, userId: "u2" },
  { jobId: 1, userId: "u3" },
  { jobId: 3, userId: "u4" },
];

const jobs: Job[] = [
  { id: 1, title: "Frontend Developer" },
  { id: 2, title: "Backend Developer" },
  { id: 3, title: "UX Designer" },
  { id: 4, title: "DevOps Engineer" },
];

function merge(applications: Application[], jobs: Job[]) {
  // count applications per jobId
  const appCount = applications.reduce(
    (acc: { [key: number]: number }, app) => {
      acc[app.jobId] = (acc[app.jobId] || 0) + 1;
      return acc;
    },
    {}
  );
  // merge job data with application counts, skip jobs with no applications
  const merged = jobs
    .filter((job) => appCount[job.id])
    .map((job) => ({
      ...job,
      applicationCount: appCount[job.id],
    }));

  return merged;
}

merge(applications, jobs);

const thirdProblemOutput = merge(applications, jobs);
console.log(thirdProblemOutput);
