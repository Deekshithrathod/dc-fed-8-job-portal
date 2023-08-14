import { useEffect } from "react";
import "./App.css";
import Home from "./layouts/Home";
import { getJobs } from "./utils/fetchData";

function App() {
  // Fetch first 200 jobs & store them in state using recoil
  useEffect(() => {
    let data = {};
    (async () => {
      data = await getJobs(10, 0);
      console.log(data);
    })();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
