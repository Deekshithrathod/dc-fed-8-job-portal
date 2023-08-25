import "./App.css";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { IJob, jobsState } from "./atoms/jobs";

import Home from "./layouts/Home";
const BASE_URL = `https://himalayas.app/jobs/api`;

function App() {
  const setJobs = useSetRecoilState(jobsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = 100;
        const offset = 0;

        const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
        const data = await res.json();

        setJobs(data.jobs as IJob[]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
