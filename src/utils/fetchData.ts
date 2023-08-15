import { IJob } from "../atoms/jobs";

const BASE_URL = `https://himalayas.app/jobs/api`;

export const getJobs = async (limit: number, offset: number) => {
  const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  const data = await res.json();

  return data.jobs as IJob[];
};
