import "./SearchResult.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";

const timeAgo = (date: number) => {
  const seconds = Math.floor((new Date().valueOf() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }

  if (seconds < 10) return "just now";

  return Math.floor(seconds) + " seconds ago";
};

const SearchResult = () => {
  return (
    <div className="search-result">
      <div className="comp-logo">
        <img src="comp-logo.png" alt="" />
      </div>
      <div className="info">
        <div className="comp-name">Kaggle</div>
        <div className="role">Full-Stack Developer (MERN)</div>
        <div className="meta-info">
          <div className="role-type">full time</div>
          <div className="details">
            <div className="location">
              <PublicIcon />
              New York
            </div>
            <div className="posted-on">
              <AccessTimeIcon />
              {timeAgo(new Date("1999-12-20").valueOf())}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
