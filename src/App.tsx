import "./App.css";
import { getJobs } from "./utils/fetchData";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { IJob, jobsState } from "./atoms/jobs";

import Home from "./layouts/Home";

function App() {
  const setJobs = useSetRecoilState(jobsState);

  useEffect(() => {
    let data = [] as IJob[];
    (async () => {
      data = await getJobs(50, 0);
      console.log(data);
      setJobs(data);
    })();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
