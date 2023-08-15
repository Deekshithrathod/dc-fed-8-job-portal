import { atom, selector } from "recoil";
import { keywordState } from "./keyword";
import { locationFilterState } from "./location";

export interface IJob {
  companyName: string;
  companyLogo: string;
  title: string;
  description: string;
  excerpt: string;
  pubDate: number;
  locationRestrictions: string[];
  guid: string;
}

export const jobsState = atom<IJob[]>({
  key: "jobsState",
  default: [] as IJob[],
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

export const filteredJobs = selector({
  key: "filteredJobsState",
  get: ({ get }) => {
    const allJobs = get(jobsState);
    const keyword = get(keywordState);
    const location = get(locationFilterState);

    return allJobs.filter((job) => {
      return (
        (job.title.includes(keyword) ||
          job.companyName.includes(keyword) ||
          job.description.includes(keyword)) &&
        (location === "" ? true : job.locationRestrictions.includes(location))
      );
    });
  },
});
