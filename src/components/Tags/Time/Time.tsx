import "./Time.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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

const Time = ({ pubDate }: { pubDate: number }) => {
  return (
    <div className="tag-time">
      <AccessTimeIcon style={{ fontSize: `1.25rem` }} />
      {timeAgo(pubDate)}
    </div>
  );
};

export default Time;
