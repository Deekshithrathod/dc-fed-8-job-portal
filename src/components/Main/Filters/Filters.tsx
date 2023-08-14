import "./Filters.css";
import PublicIcon from "@mui/icons-material/Public";

const Filters = () => {
  return (
    <aside>
      <div className="full-time-toggle">
        <label htmlFor="">
          <input type="checkbox" name="" id="" /> Full time
        </label>
      </div>

      <div className="location-filter">
        <h2>Location</h2>
        <div className="loc-search-container">
          <PublicIcon style={{ padding: `0 0.75rem`, color: `#B9BDCF` }} />
          <input
            type="text"
            name="location"
            placeholder="City, state, zip code or country"
          />
        </div>
        <div className="loc-search-recent">
          <label>
            <input type="radio" name="location" id="london" />
            London
          </label>
          <label>
            <input type="radio" name="location" id="Berlin" />
            Berlin
          </label>
          <label>
            <input type="radio" name="location" id="Hyderabad" />
            Hyderabad
          </label>
          <label>
            <input type="radio" name="location" id="New York" />
            New York
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
