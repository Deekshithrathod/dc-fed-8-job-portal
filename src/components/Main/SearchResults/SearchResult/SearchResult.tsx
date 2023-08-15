import "./SearchResult.css";
import Time from "../../../Tags/Time/Time";
import Location from "../../../Tags/Location/Location";
import RoleType from "../../../Tags/RoleType/RoleType";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { currJobIdState } from "../../../../atoms/jobs";

const SearchResult = ({
  companyLogo,
  companyName,
  title,
  location,
  pubDate,
  jobId,
}: {
  companyLogo: string;
  companyName: string;
  title: string;
  location: string;
  pubDate: number;
  jobId: string;
}) => {
  const setCurrJobId = useSetRecoilState(currJobIdState);

  return (
    <Link to={`/${jobId}`} onClick={() => setCurrJobId(jobId)}>
      <div className="search-result">
        <div className="comp-logo">
          <img src={companyLogo} alt="companyLogo" />
        </div>
        <div className="job-info">
          <div className="comp-name">{companyName}</div>
          <div className="job-title">
            {title.length > 48 ? `${title.slice(0, 48)}...` : title}
          </div>
          <div className="job-meta">
            <RoleType roleType="Full Time" />
            <div className="details">
              <Location location={location} />
              <Time pubDate={pubDate * 1000} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
