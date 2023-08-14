import "./SearchResult.css";
import Time from "../../../Tags/Time/Time";
import Location from "../../../Tags/Location/Location";
import RoleType from "../../../Tags/RoleType/RoleType";

const SearchResult = ({
  companyLogo,
  companyName,
  title,
  location,
  pubDate,
}: {
  companyLogo: string;
  companyName: string;
  title: string;
  location: string;
  pubDate: number;
}) => {
  return (
    <div className="search-result">
      <div className="comp-logo">
        <img src={companyLogo} alt="companyLogo" />
      </div>
      <div className="job-info">
        <div className="comp-name">{companyName}</div>
        <div className="job-title">{title}</div>
        <div className="job-meta">
          <RoleType roleType="Full Time" />
          <div className="details">
            <Location location={location} />
            <Time pubDate={pubDate * 1000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
