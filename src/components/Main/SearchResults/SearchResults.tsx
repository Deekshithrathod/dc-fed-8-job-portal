import "./SearchResults.css";
import SearchResult from "./SearchResult/SearchResult";
import { useRecoilValue } from "recoil";
import { jobsState } from "../../../atoms/jobs";

const SearchResults = () => {
  const jobs = useRecoilValue(jobsState);
  const getLocation = (locationRestrictions: Array<string>): string => {
    if (locationRestrictions.length === 0) {
      return `Remote`;
    }
    return locationRestrictions[0];
  };
  return (
    <main>
      {jobs.map((job, index) => (
        <SearchResult
          {...job}
          location={getLocation(job.locationRestrictions)}
          key={index}
        />
      ))}
    </main>
  );
};

export default SearchResults;
