import { atom, selector } from "recoil";
import { filteredJobs } from "./jobs";

export const pageState = atom({
  key: "pageState",
  default: {
    length: 60,
    limit: 10,
    currPage: 1,
  },
});

export const filteredJobsLength = selector({
  key: "filteredJobsLength",
  get: ({ get }) => {
    const filteredJobsList = get(filteredJobs);
    return filteredJobsList.length;
  },
});
