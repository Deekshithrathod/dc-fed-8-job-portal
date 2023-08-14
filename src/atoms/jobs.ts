import { atom } from "recoil";
import defaultJobs from "../defaultJobs.json";

export const jobsState = atom({
  key: "jobsState",
  default: defaultJobs,
});
