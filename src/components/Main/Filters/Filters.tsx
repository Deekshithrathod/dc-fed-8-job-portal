import "./Filters.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import PublicIcon from "@mui/icons-material/Public";
import { locationFilterState } from "../../../atoms/location";
import { useRecoilState } from "recoil";

const Filters = () => {
  const [location, setLocation] = useRecoilState(locationFilterState);

  return (
    <aside>
      <div className="full-time-toggle">
        <label htmlFor="">
          <input type="checkbox" /> Full time
        </label>
      </div>

      <div className="location-filter">
        <SectionHeading headingText="Location" />
        <div className="loc-search-container">
          <PublicIcon style={{ padding: `0 0.75rem`, color: `#B9BDCF` }} />
          <input
            type="text"
            name="location"
            placeholder="City, state, zip code or country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <br />
        <br />
        <br />
        <SectionHeading headingText="most Searched" />
        <div className="loc-search-recent">
          <label>
            <input
              type="radio"
              name="location"
              id="United States"
              onChange={(e) => e.target.checked && setLocation(`United States`)}
            />
            United States
          </label>
          <label>
            <input
              type="radio"
              name="location"
              id="India"
              onChange={(e) => e.target.checked && setLocation(`India`)}
            />
            India
          </label>
          <label>
            <input
              type="radio"
              name="location"
              id="United Kingdom"
              onChange={(e) =>
                e.target.checked && setLocation(`United Kingdom`)
              }
            />
            United Kingdom
          </label>
          <label>
            <input
              type="radio"
              name="location"
              id="Germany"
              onChange={(e) => e.target.checked && setLocation(`Germany`)}
            />
            Germany
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
