import "./JobListing.css";
import LeftPane from "./LeftPane/LeftPane";
import RightPane from "./RightPane/RightPane";

const JobListing = () => {
  return (
    <div className="job-listing">
      <LeftPane />
      <RightPane />
    </div>
  );
};
export default JobListing;
