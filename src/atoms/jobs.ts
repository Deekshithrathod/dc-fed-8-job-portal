import { atom, selector } from "recoil";
import defaultJobs from "../utils/defaultJobs.json";

export const jobsState = atom({
  key: "jobsState",
  default: defaultJobs,
});

export const currJobIdState = atom({
  key: "currJobIdState",
  default: "0",
});

export const getJobFromIdState = selector({
  key: "getJobFromIdState",
  get: ({ get }) => {
    const currJobs = get(jobsState);
    const currJobId = get(currJobIdState);

    console.log(currJobId);

    return currJobs.find(
      (job) => job.guid.slice(job.guid.lastIndexOf(`-`) + 1) === currJobId
    );
  },
});
