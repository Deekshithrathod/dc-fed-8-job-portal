import "./Search.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Search = () => {
  return (
    <div className="search-container">
      <div className="bg-img">
        <img src="backgroundImg.png" alt="Buildings of companies" />
      </div>
      <div className="search-input-container">
        <WorkOutlineIcon
          style={{ color: `#B9BDCF`, padding: `0 0.5rem 0 .75rem` }}
        />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Title, companies, expertise or benefits"
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
