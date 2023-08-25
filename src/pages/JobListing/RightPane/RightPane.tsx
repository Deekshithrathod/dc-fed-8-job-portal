import Location from "../../../components/Tags/Location/Location";
import RoleType from "../../../components/Tags/RoleType/RoleType";
import Time from "../../../components/Tags/Time/Time";
import "./RightPane.css";
import { useRecoilValue } from "recoil";
import { getJobFromIdState } from "../../../atoms/jobs";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { getLocation } from "../../../utils/location";
import parse from "html-react-parser";

const RightPane = () => {
  const currJob = useRecoilValue(getJobFromIdState);
  if (!currJob) {
    return <SectionHeading headingText="NOT FOUND - Job Listing is Outdated" />;
  }

  return (
    <div className="right-pane">
      <div className="main-heading">
        <h2>{currJob.title}</h2>
        <RoleType roleType="full Time" />
        <div className="time-container">
          <Time pubDate={new Date("2023-1-20").valueOf()} />
        </div>
      </div>
      <div className="comp-card">
        <div className="comp-logo">
          <img src={currJob.companyLogo} alt="" />
        </div>
        <div className="comp-info">
          <div className="comp-name">{currJob.companyName}</div>
          <Location location={getLocation(currJob.locationRestrictions)} />
        </div>
      </div>
      <div className="job-desc">{parse(currJob.description)}</div>
    </div>
  );
};

export default RightPane;
