import "./SearchResults.css";
import SearchResult from "./SearchResult/SearchResult";
import { useRecoilValue } from "recoil";
import { jobsState } from "../../../atoms/jobs";
import { getLocation } from "../../../utils/location";

const SearchResults = () => {
  const jobs = useRecoilValue(jobsState);

  const getJobId = (id: string) => {
    // slice the string
    return id.slice(id.lastIndexOf(`-`) + 1);
  };
  return (
    <main>
      {jobs.map((job) => (
        <SearchResult
          {...job}
          location={getLocation(job.locationRestrictions)}
          key={job.guid}
          jobId={getJobId(job.guid)}
        />
      ))}
    </main>
  );
};

export default SearchResults;
